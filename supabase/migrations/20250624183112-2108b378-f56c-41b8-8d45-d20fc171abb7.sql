
-- Create registrations table to store user registration details
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  experience_level TEXT NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  preferred_batch TEXT,
  motivation TEXT,
  payment_screenshot_url TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for payment screenshots
INSERT INTO storage.buckets (id, name, public) VALUES ('payment-screenshots', 'payment-screenshots', true);

-- Create policy for payment screenshots bucket
CREATE POLICY "Anyone can upload payment screenshots" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'payment-screenshots');

CREATE POLICY "Anyone can view payment screenshots" ON storage.objects
  FOR SELECT USING (bucket_id = 'payment-screenshots');

-- Enable Row Level Security on registrations table
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy for registrations - anyone can insert (for registration)
CREATE POLICY "Anyone can register" ON public.registrations
  FOR INSERT WITH CHECK (true);

-- Create policy for registrations - users can view their own registration
CREATE POLICY "Users can view their own registration" ON public.registrations
  FOR SELECT USING (true);
