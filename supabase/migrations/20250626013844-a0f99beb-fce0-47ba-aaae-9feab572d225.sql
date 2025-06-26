
-- Create tables for study materials
CREATE TABLE public.study_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  file_type TEXT, -- 'pdf', 'video', 'link', etc.
  week_number INTEGER,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create tables for questions/support
CREATE TABLE public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'answered', 'closed'
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create tables for scheduled sessions
CREATE TABLE public.scheduled_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  session_date TIMESTAMP WITH TIME ZONE NOT NULL,
  meeting_link TEXT,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create table for session registrations
CREATE TABLE public.session_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES public.scheduled_sessions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(session_id, user_id)
);

-- Create user roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'student', -- 'admin', 'instructor', 'student'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS on all tables
ALTER TABLE public.study_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scheduled_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.session_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create policies for study materials
CREATE POLICY "Everyone can view published materials" ON public.study_materials
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage study materials" ON public.study_materials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create policies for questions
CREATE POLICY "Users can view their own questions" ON public.questions
  FOR SELECT USING (user_id = auth.uid() OR is_public = true);

CREATE POLICY "Users can create questions" ON public.questions
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own questions" ON public.questions
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all questions" ON public.questions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create policies for scheduled sessions
CREATE POLICY "Everyone can view active sessions" ON public.scheduled_sessions
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage sessions" ON public.scheduled_sessions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create policies for session registrations
CREATE POLICY "Users can view their registrations" ON public.session_registrations
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can register for sessions" ON public.session_registrations
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can view all registrations" ON public.session_registrations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Create policies for user roles
CREATE POLICY "Users can view their own role" ON public.user_roles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Fix the course content policy to avoid the permission denied error
DROP POLICY IF EXISTS "Registered users can view published content" ON public.course_content;

CREATE POLICY "Allow authenticated users to view published content" ON public.course_content
  FOR SELECT USING (is_published = true AND auth.uid() IS NOT NULL);

-- Insert default admin role (replace with your actual user ID after signup)
-- You'll need to update this with your actual user ID from auth.users
-- INSERT INTO public.user_roles (user_id, role) VALUES ('YOUR_USER_ID_HERE', 'admin');
