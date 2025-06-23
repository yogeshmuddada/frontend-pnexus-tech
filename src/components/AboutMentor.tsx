
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Code, Users, Briefcase } from "lucide-react";

const AboutMentor = () => {
  return (
    <section className="py-12 bg-white sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 sm:text-4xl sm:mb-4 md:text-5xl">
            Meet Your <span className="text-bootcamp-blue">Mentor</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto px-2 sm:text-xl">
            Learn from an industry expert with real-world experience in building scalable applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Mentor Photo Section */}
                <div className="bg-gradient-to-br from-bootcamp-blue to-bootcamp-blue-dark p-6 flex items-center justify-center sm:p-12">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl sm:w-48 sm:h-48 sm:mb-6">
                      <div className="w-20 h-20 bg-bootcamp-orange rounded-full flex items-center justify-center sm:w-40 sm:h-40">
                        <span className="text-white text-xl font-bold sm:text-6xl">DC</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 sm:text-3xl sm:mb-2">Durga Chikkala</h3>
                    <p className="text-bootcamp-blue-light text-sm mb-4 sm:text-lg sm:mb-6">Senior Frontend Engineer</p>
                    <Button 
                      className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white text-xs py-2 px-4 sm:text-base sm:py-3 sm:px-6"
                      onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1.5 sm:w-4 sm:h-4 sm:mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Bio and Highlights Section */}
                <div className="p-4 sm:p-12">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 sm:text-2xl sm:mb-4">Why Learn from Durga?</h4>
                      <p className="text-sm text-gray-600 leading-relaxed sm:text-lg">
                        With over <strong>6+ years</strong> of hands-on experience in frontend development, 
                        Durga has built scalable applications used by thousands of users. His passion for 
                        teaching and mentoring has helped <strong>100+ developers</strong> kickstart their careers.
                      </p>
                    </div>

                    {/* Enhanced Highlight Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="bg-bootcamp-blue/5 rounded-lg p-2 text-center hover:bg-bootcamp-blue/10 transition-colors duration-300 sm:p-4">
                        <Briefcase className="w-5 h-5 text-bootcamp-blue mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                        <div className="text-lg font-bold text-bootcamp-blue sm:text-2xl">6+ Years</div>
                        <div className="text-xs text-gray-600 sm:text-sm">Industry Experience</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-2 text-center hover:bg-bootcamp-orange/10 transition-colors duration-300 sm:p-4">
                        <Users className="w-5 h-5 text-bootcamp-orange mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                        <div className="text-lg font-bold text-bootcamp-orange sm:text-2xl">100+</div>
                        <div className="text-xs text-gray-600 sm:text-sm">Students Mentored</div>
                      </div>
                      <div className="bg-bootcamp-blue/5 rounded-lg p-2 text-center hover:bg-bootcamp-blue/10 transition-colors duration-300 sm:p-4">
                        <Code className="w-5 h-5 text-bootcamp-blue mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                        <div className="text-lg font-bold text-bootcamp-blue sm:text-2xl">50+</div>
                        <div className="text-xs text-gray-600 sm:text-sm">Projects Built</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-2 text-center hover:bg-bootcamp-orange/10 transition-colors duration-300 sm:p-4">
                        <Award className="w-5 h-5 text-bootcamp-orange mx-auto mb-1 sm:w-8 sm:h-8 sm:mb-2" />
                        <div className="text-lg font-bold text-bootcamp-orange sm:text-2xl">Expert</div>
                        <div className="text-xs text-gray-600 sm:text-sm">React & JavaScript</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300 sm:p-6">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm sm:text-base sm:mb-3">What makes Durga unique:</h5>
                      <ul className="space-y-1.5 text-gray-600 text-sm sm:space-y-2 sm:text-base">
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
