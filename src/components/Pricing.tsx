
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Clock, Users, Trophy, Zap } from "lucide-react";

const Pricing = () => {
  const features = [
    "30 days of intensive training",
    "Live interactive sessions",
    "5+ hands-on projects",
    "Personal portfolio website",
    "1-on-1 mentoring sessions",
    "24/7 community support",
    "Lifetime access to materials",
    "Job interview preparation",
    "Certificate of completion",
    "GitHub portfolio setup"
  ];

  const handleEnroll = () => {
    // This would typically open a payment gateway or enrollment form
    alert("Enrollment form will open here. Contact Durga at durga.chikkala@email.com to reserve your seat!");
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-4 py-2 text-sm font-semibold mb-4">
            🔥 Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="text-bootcamp-blue">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to become a frontend developer, all in one affordable package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Frontend Pro Bootcamp</h3>
              <p className="text-bootcamp-blue-light mb-4">Complete 30-day program</p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold">₹4,999</span>
                <div className="ml-4 text-left">
                  <div className="line-through text-bootcamp-blue-light">₹9,999</div>
                  <div className="text-sm">50% Early Bird</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-bootcamp-orange text-white px-4 py-2">
                Only 30 Seats Available
              </Badge>
            </div>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Features List */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Everything Included:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & Details */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-bootcamp-blue" />
                      Batch Details
                    </h4>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span className="font-semibold">January 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">30 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mon-Fri, 7-9 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">Live Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-bootcamp-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-bootcamp-blue">60+</div>
                      <div className="text-sm text-gray-600">Live Hours</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <Trophy className="w-8 h-8 text-bootcamp-orange mx-auto mb-2" />
                      <div className="text-2xl font-bold text-bootcamp-orange">5+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>

                  <div className="bg-bootcamp-blue/5 border-l-4 border-bootcamp-blue rounded p-4">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-bootcamp-blue mr-2 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-gray-900">Money-Back Guarantee</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          Not satisfied after the first week? Get a full refund, no questions asked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  onClick={handleEnroll}
                  size="lg" 
                  className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  Enroll Now - Limited Seats! 🚀
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  🔒 Secure payment • 💳 All major cards accepted • 📱 Instant access
                </p>
                
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-center text-red-700">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Only 8 seats remaining out of 30!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Options */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Multiple Payment Options</h4>
          <div className="flex justify-center items-center space-x-6 text-gray-600">
            <span>💳 Credit/Debit Cards</span>
            <span>🏦 UPI</span>
            <span>💰 Net Banking</span>
            <span>📱 Digital Wallets</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
