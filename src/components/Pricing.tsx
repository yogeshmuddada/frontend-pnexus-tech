import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Clock, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "30 days of intensive training",
    "Live interactive sessions",
    "5+ hands-on projects",
    "Personal portfolio website",
    "1-on-1 mentoring sessions",
    "24/7 community support",
    "Lifetime access to materials",
    "Certificate of completion",
    "GitHub portfolio setup"
  ];

  return (
    <section id="pricing" className="py-12 bg-gray-50 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-3 py-1.5 text-xs font-semibold mb-3 sm:px-4 sm:py-2 sm:text-sm sm:mb-4">
            🔥 Limited Time Offer
          </Badge>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 sm:text-4xl sm:mb-4 md:text-5xl">
            Simple, Transparent <span className="text-bootcamp-blue">Pricing</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto px-2 sm:text-xl">
            Everything you need to become a frontend developer, all in one affordable package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark text-white p-6 text-center sm:p-8">
              <h3 className="text-xl font-bold mb-1 sm:text-3xl sm:mb-2">Frontend Pro Bootcamp</h3>
              <p className="text-bootcamp-blue-light mb-3 text-sm sm:text-base sm:mb-4">Complete 30-day program</p>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-3xl font-bold sm:text-5xl">₹2,499</span>
                <div className="ml-3 text-left sm:ml-4">
                  <div className="line-through text-bootcamp-blue-light text-sm sm:text-base">₹4,999</div>
                  <div className="text-xs sm:text-sm">50% Early Bird</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-bootcamp-orange text-white px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                Only 30 Seats Available
              </Badge>
            </div>

            <CardContent className="p-4 sm:p-8">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {/* Features List */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 sm:text-xl sm:mb-6">Everything Included:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 sm:w-5 sm:h-5 sm:mr-3" />
                        <span className="text-sm text-gray-700 sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & Details */}
                <div id="Register" className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm sm:text-base sm:mb-4">
                      <Calendar className="w-4 h-4 mr-2 text-bootcamp-blue sm:w-5 sm:h-5" />
                      Batch Details
                    </h4>
                    <div className="space-y-2 text-gray-700 text-sm sm:space-y-3 sm:text-base">
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span className="font-semibold">July 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">30 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-semibold">Mon-Sat, 8-9 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span className="font-semibold">Live Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center sm:p-4">
                      <Clock className="w-6 h-6 text-bootcamp-blue mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                      <div className="text-lg font-bold text-bootcamp-blue sm:text-2xl">30+</div>
                      <div className="text-xs text-gray-600 sm:text-sm">Live Hours</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 text-center sm:p-4">
                      <Trophy className="w-6 h-6 text-bootcamp-orange mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                      <div className="text-lg font-bold text-bootcamp-orange sm:text-2xl">5+</div>
                      <div className="text-xs text-gray-600 sm:text-sm">Projects</div>
                    </div>
                  </div>

                  <div className="bg-bootcamp-blue/5 border-l-4 border-bootcamp-blue rounded p-3 sm:p-4">
                    <div className="flex items-start">
                      <Zap className="w-4 h-4 text-bootcamp-blue mr-2 mt-0.5 sm:w-5 sm:h-5" />
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm sm:text-base">Money-Back Guarantee</h5>
                        <p className="text-xs text-gray-600 mt-1 sm:text-sm">
                          Not satisfied after the first week? Get a full refund, no questions asked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div  className="mt-6 text-center sm:mt-8">
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-3 px-6 rounded-full text-sm shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 animate-glow w-full sm:w-auto sm:py-4 sm:px-12 sm:text-lg"
                  >
                    Register Now - Limited Seats! 🚀
                  </Button>
                </Link>
                <p className="text-xs text-gray-600 mt-3 sm:text-sm sm:mt-4">
                  🔒 Secure registration • 💳 Manual payment verification • 📱 Instant confirmation
                </p>
                
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg sm:mt-6 sm:p-4">
                  <div className="flex items-center justify-center text-red-700 text-sm sm:text-base">
                    <Users className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
                    <span className="font-semibold">Only 8 seats remaining out of 30!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Options */}
        <div className="max-w-2xl mx-auto mt-8 text-center sm:mt-12">
          <h4 className="text-sm font-semibold text-gray-900 mb-3 sm:text-lg sm:mb-4">Multiple Payment Options</h4>
          <div className="flex flex-wrap justify-center items-center gap-3 text-gray-600 text-xs sm:gap-6 sm:text-sm">
            <span>🏦 UPI</span>
            <span>💰 Net Banking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
