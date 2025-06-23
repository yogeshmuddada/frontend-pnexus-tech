
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Code, Users, Briefcase } from "lucide-react";

const AboutMentor = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-bootcamp-blue">Mentor</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Learn from an industry expert with real-world experience in building scalable applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Mentor Photo Section */}
                <div className="bg-gradient-to-br from-bootcamp-blue to-bootcamp-blue-dark p-8 sm:p-12 flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center">
                    <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto mb-4 sm:mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-24 sm:w-40 h-24 sm:h-40 bg-bootcamp-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl sm:text-6xl font-bold">DC</span>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Durga Chikkala</h3>
                    <p className="text-bootcamp-blue-light text-base sm:text-lg mb-4 sm:mb-6">Senior Frontend Engineer</p>
                    <Button 
                      className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white text-sm sm:text-base"
                      onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Bio and Highlights Section */}
                <div className="p-6 sm:p-12 order-1 lg:order-2">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Learn from Durga?</h4>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        With over <strong>6+ years</strong> of hands-on experience in frontend development, 
                        Durga has built scalable applications used by thousands of users. His passion for 
                        teaching and mentoring has helped <strong>100+ developers</strong> kickstart their careers.
                      </p>
                    </div>

                    {/* Enhanced Highlight Cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-bootcamp-blue/5 rounded-lg p-3 sm:p-4 text-center hover:bg-bootcamp-blue/10 transition-colors duration-300">
                        <Briefcase className="w-6 sm:w-8 h-6 sm:h-8 text-bootcamp-blue mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-bootcamp-blue">6+ Years</div>
                        <div className="text-xs sm:text-sm text-gray-600">Industry Experience</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-3 sm:p-4 text-center hover:bg-bootcamp-orange/10 transition-colors duration-300">
                        <Users className="w-6 sm:w-8 h-6 sm:h-8 text-bootcamp-orange mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-bootcamp-orange">100+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Students Mentored</div>
                      </div>
                      <div className="bg-bootcamp-blue/5 rounded-lg p-3 sm:p-4 text-center hover:bg-bootcamp-blue/10 transition-colors duration-300">
                        <Code className="w-6 sm:w-8 h-6 sm:h-8 text-bootcamp-blue mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-bootcamp-blue">50+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Projects Built</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-3 sm:p-4 text-center hover:bg-bootcamp-orange/10 transition-colors duration-300">
                        <Award className="w-6 sm:w-8 h-6 sm:h-8 text-bootcamp-orange mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-bootcamp-orange">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">React & JavaScript</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">What makes Durga unique:</h5>
                      <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0">•</span>
                          <span>Simplifies complex concepts into digestible lessons</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0">•</span>
                          <span>Focuses on practical, real-world application</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0">•</span>
                          <span>Provides personalized feedback and career guidance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0">•</span>
                          <span>Available for doubt-clearing even after bootcamp</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMentor;
