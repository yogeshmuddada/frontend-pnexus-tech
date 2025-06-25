
-- Create profiles table to store additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course_content table for topics and materials
CREATE TABLE public.course_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  topics JSONB, -- Array of topics to be discussed
  preparation_materials TEXT, -- What to study before
  gdrive_video_links JSONB, -- Array of Google Drive video links
  week_number INTEGER,
  session_date DATE,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_content ENABLE ROW LEVEL SECURITY;

-- Profiles policies - users can only see their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Course content policies - only registered users can view published content
CREATE POLICY "Registered users can view published content" ON public.course_content
  FOR SELECT USING (
    is_published = true AND 
    EXISTS (
      SELECT 1 FROM public.registrations 
      WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
      AND payment_status = 'verified'
    )
  );

-- Function to handle new user signup - only allow if email is registered
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  registration_exists BOOLEAN;
  user_name TEXT;
BEGIN
  -- Check if email exists in registrations with verified payment
  SELECT EXISTS(
    SELECT 1 FROM public.registrations 
    WHERE email = NEW.email AND payment_status = 'verified'
  ), full_name INTO registration_exists, user_name
  FROM public.registrations 
  WHERE email = NEW.email AND payment_status = 'verified'
  LIMIT 1;

  -- If email not registered or payment not verified, prevent signup
  IF NOT registration_exists THEN
    RAISE EXCEPTION 'Only registered users with verified payment can sign up. Please complete your registration first.';
  END IF;

  -- Create profile for verified user
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, user_name);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run the function on user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample course content
INSERT INTO public.course_content (title, description, topics, preparation_materials, gdrive_video_links, week_number, session_date, is_published) VALUES
('Week 1: React Fundamentals', 'Introduction to React and modern JavaScript', 
 '["Components and JSX", "Props and State", "Event Handling", "Conditional Rendering"]'::jsonb,
 'Review JavaScript ES6+ features, especially destructuring, arrow functions, and modules',
 '["https://drive.google.com/file/d/sample1", "https://drive.google.com/file/d/sample2"]'::jsonb,
 1, '2024-01-15', true),
('Week 2: Advanced React Patterns', 'Hooks, Context, and State Management',
 '["Custom Hooks", "Context API", "useReducer", "Performance Optimization"]'::jsonb,
 'Complete Week 1 exercises and read React Hooks documentation',
 '["https://drive.google.com/file/d/sample3", "https://drive.google.com/file/d/sample4"]'::jsonb,
 2, '2024-01-22', true);
