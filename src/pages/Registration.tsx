
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    preferredBatch: "",
    motivation: "",
  });
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPG, etc.)",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setPaymentFile(file);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone || !formData.experienceLevel) {
        toast({
          title: "Missing required fields",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (!paymentFile) {
        toast({
          title: "Payment screenshot required",
          description: "Please upload your payment screenshot",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Upload payment screenshot
      const screenshotPath = await uploadPaymentScreenshot(paymentFile);
      if (!screenshotPath) {
        toast({
          title: "Upload failed",
          description: "Failed to upload payment screenshot. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Insert registration data
      const { error } = await supabase
        .from('registrations')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience_level: formData.experienceLevel,
          preferred_batch: formData.referredBy || null,
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering! We'll review your payment and get back to you within 24 hours.
            </p>
            <Link to="/">
              <Button className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Register for Frontend Pro Bootcamp
          </h1>
          <p className="text-gray-600">
            Complete your registration and upload payment screenshot for manual verification
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registration Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Personal Information</h3>
                
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <Label htmlFor="experienceLevel">Experience Level *</Label>
                <Select onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (No prior experience)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (Some HTML/CSS knowledge)</SelectItem>
                    <SelectItem value="advanced">Advanced (Some programming experience)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Batch */}
              <div>
                <Label htmlFor="referredBy">Referred By</Label>
                <Input
                  id="referredBy"
                  type="text"
                  value={formData.preferredBatch}
                  onChange={(e) => handleInputChange('referredBy', e.target.value)}
                  placeholder="Yogi"
                />
              </div>

              {/* Motivation */}
              <div>
                <Label htmlFor="motivation">Why do you want to join this bootcamp?</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Tell us about your goals and motivation..."
                  rows={4}
                />
              </div>

              {/* Payment Screenshot Upload */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Payment Verification</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 mb-2">
                    <strong>Payment Instructions:</strong>
                  </p>
                  <p className="text-sm text-blue-700 mb-2">
                    Please transfer ₹2,499 to the following account and upload a screenshot:
                  </p>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>UPI ID:</strong> durga.chikkala@paytm</p>
                    <p><strong>Amount:</strong> ₹2,499</p>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="paymentScreenshot">Upload Payment Screenshot *</Label>
                  <div className="mt-2">
                    <label htmlFor="paymentScreenshot" className="cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {paymentFile ? paymentFile.name : "Click to upload payment screenshot"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
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
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-bootcamp-orange hover:bg-bootcamp-orange/90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-bootcamp-blue hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
