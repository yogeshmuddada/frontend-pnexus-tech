
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RegistrationSteps } from "@/components/RegistrationSteps";
import { FormField } from "@/components/FormField";
import { PaymentInstructions } from "@/components/PaymentInstructions";

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    referredBy: "",
    motivation: "",
  });
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const steps = [
    { id: 1, title: "Personal Info", description: "Basic details" },
    { id: 2, title: "Experience", description: "Your background" },
    { id: 3, title: "Payment", description: "Complete payment" },
  ];

  const experienceOptions = [
    { value: "beginner", label: "Beginner (No prior experience)" },
    { value: "intermediate", label: "Intermediate (Some HTML/CSS knowledge)" },
    { value: "advanced", label: "Advanced (Some programming experience)" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.experienceLevel) newErrors.experienceLevel = "Please select your experience level";
    }

    if (step === 3) {
      if (!paymentFile) newErrors.paymentFile = "Payment screenshot is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPG, etc.)",
          variant: "destructive",
        });
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setPaymentFile(file);
      if (errors.paymentFile) {
        setErrors(prev => ({ ...prev, paymentFile: "" }));
      }
    }
  };

  const uploadPaymentScreenshot = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('payment-screenshots')
      .upload(fileName, file);

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    return data.path;
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    
    setIsLoading(true);

    try {
      const screenshotPath = await uploadPaymentScreenshot(paymentFile!);
      if (!screenshotPath) {
        toast({
          title: "Upload failed",
          description: "Failed to upload payment screenshot. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const { error } = await supabase
        .from('registrations')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience_level: formData.experienceLevel,
          referred_by: formData.referredBy || null,
          motivation: formData.motivation || null,
          payment_screenshot_url: screenshotPath,
        });

      if (error) {
        console.error('Registration error:', error);
        toast({
          title: "Registration failed",
          description: "There was an error submitting your registration. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Registration successful!",
        description: "Your registration has been submitted for review.",
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Registration failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Registration Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering! We'll review your payment and get back to you within 24 hours.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                You'll receive a confirmation email once your payment is verified.
              </p>
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Join Frontend Pro Bootcamp
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your career with hands-on frontend development training
          </p>
        </div>

        <RegistrationSteps currentStep={currentStep} steps={steps} />

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-xl">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Experience & Background"}
              {currentStep === 3 && "Payment & Verification"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <FormField
                  label="Full Name"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(value) => handleInputChange('fullName', value)}
                  placeholder="Enter your full name"
                  required
                  error={errors.fullName}
                />
                <FormField
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="Enter your email address"
                  required
                  error={errors.email}
                />
                <FormField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  placeholder="Enter your phone number"
                  required
                  error={errors.phone}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <FormField
                  label="Experience Level"
                  id="experienceLevel"
                  type="select"
                  value={formData.experienceLevel}
                  onChange={(value) => handleInputChange('experienceLevel', value)}
                  placeholder="Select your experience level"
                  required
                  options={experienceOptions}
                  error={errors.experienceLevel}
                />
                <FormField
                  label="Referred By"
                  id="referredBy"
                  value={formData.referredBy}
                  onChange={(value) => handleInputChange('referredBy', value)}
                  placeholder="Who referred you to this bootcamp?"
                />
                <FormField
                  label="Why do you want to join this bootcamp?"
                  id="motivation"
                  type="textarea"
                  value={formData.motivation}
                  onChange={(value) => handleInputChange('motivation', value)}
                  placeholder="Tell us about your goals and motivation..."
                  rows={4}
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <PaymentInstructions />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload Payment Screenshot *
                  </label>
                  <div className="mt-2">
                    <label htmlFor="paymentScreenshot" className="cursor-pointer">
                      <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                        paymentFile 
                          ? 'border-green-300 bg-green-50' 
                          : errors.paymentFile 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      }`}>
                        <Upload className={`w-12 h-12 mx-auto mb-4 ${
                          paymentFile ? 'text-green-500' : 'text-gray-400'
                        }`} />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          {paymentFile ? paymentFile.name : "Click to upload payment screenshot"}
                        </p>
                        <p className="text-sm text-gray-500">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </label>
                    <input
                      id="paymentScreenshot"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    {errors.paymentFile && (
                      <p className="text-red-600 text-sm mt-2">{errors.paymentFile}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  {isLoading ? "Submitting..." : "Submit Registration"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
