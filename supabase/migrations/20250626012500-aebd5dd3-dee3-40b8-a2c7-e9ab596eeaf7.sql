
-- Fix the RLS policy for course_content table
-- The current policy is trying to access auth.users table which causes permission denied error
-- We need to update it to use the registrations table properly

DROP POLICY IF EXISTS "Registered users can view published content" ON public.course_content;

-- Create a corrected policy that checks registrations table properly
CREATE POLICY "Registered users can view published content" ON public.course_content
  FOR SELECT USING (
    is_published = true AND 
    EXISTS (
      SELECT 1 FROM public.registrations 
      WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
      AND payment_status = 'verified'
    )
  );

-- Also ensure we have proper RLS policies for profiles table
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles  
  FOR UPDATE USING (auth.uid() = id);
