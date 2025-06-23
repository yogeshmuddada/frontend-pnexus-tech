
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Code, Users, Briefcase } from "lucide-react";

const AboutMentor = () => {
  return (
    <section className="py-16 bg-white sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 lg:mb-28">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:text-5xl sm:mb-6 lg:text-7xl lg:mb-8">
            Meet Your <span className="text-bootcamp-blue">Mentor</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-2 sm:text-xl lg:text-2xl lg:leading-relaxed">
            Learn from an industry expert with real-world experience in building scalable applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-gray-50 to-white hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Mentor Photo Section */}
                <div className="bg-gradient-to-br from-bootcamp-blue to-bootcamp-blue-dark p-8 flex items-center justify-center sm:p-16 lg:p-20">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl sm:w-56 sm:h-56 sm:mb-8 lg:w-72 lg:h-72 lg:mb-12 transform hover:scale-105 transition-transform duration-300">
                      <div className="w-28 h-28 bg-bootcamp-orange rounded-full flex items-center justify-center sm:w-48 sm:h-48 lg:w-60 lg:h-60">
                        <span className="text-white text-2xl font-bold sm:text-5xl lg:text-7xl">DC</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 sm:text-4xl sm:mb-3 lg:text-5xl lg:mb-4">Durga Chikkala</h3>
                    <p className="text-bootcamp-blue-light text-base mb-6 sm:text-xl sm:mb-8 lg:text-2xl lg:mb-10">Senior Frontend Engineer</p>
                    <Button 
                      className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white text-sm py-3 px-6 sm:text-lg sm:py-4 sm:px-8 lg:text-xl lg:py-5 lg:px-10 shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Bio and Highlights Section */}
                <div className="p-6 sm:p-12 lg:p-16">
                  <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 sm:text-3xl sm:mb-5 lg:text-4xl lg:mb-6">Why Learn from Durga?</h4>
                      <p className="text-base text-gray-600 leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed">
                        With over <strong>6+ years</strong> of hands-on experience in frontend development, 
                        Durga has built scalable applications used by thousands of users. His passion for 
                        teaching and mentoring has helped <strong>100+ developers</strong> kickstart their careers.
                      </p>
                    </div>

                    {/* Enhanced Highlight Cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
                      <div className="bg-bootcamp-blue/5 rounded-xl p-3 text-center hover:bg-bootcamp-blue/10 transition-all duration-300 transform hover:scale-105 sm:p-6 lg:p-8">
                        <Briefcase className="w-6 h-6 text-bootcamp-blue mx-auto mb-2 sm:w-10 sm:h-10 sm:mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                        <div className="text-xl font-bold text-bootcamp-blue sm:text-3xl lg:text-4xl">6+ Years</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Industry Experience</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-xl p-3 text-center hover:bg-bootcamp-orange/10 transition-all duration-300 transform hover:scale-105 sm:p-6 lg:p-8">
                        <Users className="w-6 h-6 text-bootcamp-orange mx-auto mb-2 sm:w-10 sm:h-10 sm:mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                        <div className="text-xl font-bold text-bootcamp-orange sm:text-3xl lg:text-4xl">100+</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Students Mentored</div>
                      </div>
                      <div className="bg-bootcamp-blue/5 rounded-xl p-3 text-center hover:bg-bootcamp-blue/10 transition-all duration-300 transform hover:scale-105 sm:p-6 lg:p-8">
                        <Code className="w-6 h-6 text-bootcamp-blue mx-auto mb-2 sm:w-10 sm:h-10 sm:mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                        <div className="text-xl font-bold text-bootcamp-blue sm:text-3xl lg:text-4xl">50+</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Projects Built</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-xl p-3 text-center hover:bg-bootcamp-orange/10 transition-all duration-300 transform hover:scale-105 sm:p-6 lg:p-8">
                        <Award className="w-6 h-6 text-bootcamp-orange mx-auto mb-2 sm:w-10 sm:h-10 sm:mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                        <div className="text-xl font-bold text-bootcamp-orange sm:text-3xl lg:text-4xl">Expert</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">React & JavaScript</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-300 sm:p-8 lg:p-10">
                      <h5 className="font-bold text-gray-900 mb-3 text-base sm:text-lg lg:text-xl sm:mb-4 lg:mb-6">What makes Durga unique:</h5>
                      <ul className="space-y-2 text-gray-600 text-sm sm:space-y-3 sm:text-base lg:text-lg lg:space-y-4">
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-3 flex-shrink-0 text-lg sm:text-xl lg:text-2xl">•</span>
                          <span>Simplifies complex concepts into digestible lessons</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-3 flex-shrink-0 text-lg sm:text-xl lg:text-2xl">•</span>
                          <span>Focuses on practical, real-world application</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-3 flex-shrink-0 text-lg sm:text-xl lg:text-2xl">•</span>
                          <span>Provides personalized feedback and career guidance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-3 flex-shrink-0 text-lg sm:text-xl lg:text-2xl">•</span>
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
