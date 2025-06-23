
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Code, Users, Briefcase, Star, Trophy } from "lucide-react";

const AboutMentor = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 sm:text-3xl sm:mb-4 lg:text-5xl lg:mb-6">
            Meet Your <span className="text-bootcamp-blue">Mentor</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2 sm:text-base lg:text-lg lg:leading-relaxed">
            Learn from an industry expert with real-world experience in building scalable applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Mentor Photo Section - Enhanced */}
                <div className="lg:col-span-2 bg-gradient-to-br from-bootcamp-blue via-bootcamp-blue-dark to-bootcamp-blue p-6 flex flex-col items-center justify-center relative overflow-hidden sm:p-8 lg:p-12">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-bootcamp-orange rounded-full translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    {/* Enhanced Profile Picture */}
                    <div className="relative mb-4 sm:mb-6 lg:mb-8">
                      <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl sm:w-32 sm:h-32 lg:w-40 lg:h-40 transform hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-bootcamp-orange to-bootcamp-orange-light rounded-full flex items-center justify-center sm:w-28 sm:h-28 lg:w-36 lg:h-36">
                          <span className="text-white text-lg font-bold sm:text-2xl lg:text-4xl">DC</span>
                        </div>
                      </div>
                      {/* Floating badge */}
                      <div className="absolute -top-1 -right-1 bg-bootcamp-orange text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg sm:-top-2 sm:-right-2 sm:text-sm sm:px-3 sm:py-1">
                        <Star className="w-3 h-3 fill-white sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2 lg:text-3xl lg:mb-3">Durga Chikkala</h3>
                    <p className="text-bootcamp-blue-light text-sm mb-1 sm:text-base sm:mb-2 lg:text-lg lg:mb-3">Senior Frontend Engineer</p>
                    <p className="text-white/80 text-xs mb-4 sm:text-sm sm:mb-6 lg:text-base lg:mb-8">React & JavaScript Expert</p>
                    
                    <Button 
                      className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white text-xs py-2 px-4 sm:text-sm sm:py-3 sm:px-6 lg:text-base lg:py-3 lg:px-8 shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 rounded-full"
                      onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2 lg:w-5 lg:h-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Bio and Highlights Section - Enhanced */}
                <div className="lg:col-span-3 p-4 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 sm:text-xl sm:mb-3 lg:text-2xl lg:mb-4 flex items-center">
                        <Trophy className="w-5 h-5 text-bootcamp-orange mr-2 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                        Why Learn from Durga?
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed sm:text-base lg:text-lg lg:leading-relaxed">
                        With over <strong className="text-bootcamp-blue">6+ years</strong> of hands-on experience in frontend development, 
                        Durga has built scalable applications used by thousands of users. His passion for 
                        teaching and mentoring has helped <strong className="text-bootcamp-orange">100+ developers</strong> kickstart their careers.
                      </p>
                    </div>

                    {/* Enhanced Highlight Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
                      <div className="bg-gradient-to-br from-bootcamp-blue/5 to-bootcamp-blue/10 rounded-xl p-3 text-center hover:from-bootcamp-blue/10 hover:to-bootcamp-blue/15 transition-all duration-300 transform hover:scale-105 border border-bootcamp-blue/10 sm:p-4 lg:p-6">
                        <Briefcase className="w-5 h-5 text-bootcamp-blue mx-auto mb-1 sm:w-6 sm:h-6 sm:mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                        <div className="text-lg font-bold text-bootcamp-blue sm:text-xl lg:text-2xl">6+ Years</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Industry Experience</div>
                      </div>
                      <div className="bg-gradient-to-br from-bootcamp-orange/5 to-bootcamp-orange/10 rounded-xl p-3 text-center hover:from-bootcamp-orange/10 hover:to-bootcamp-orange/15 transition-all duration-300 transform hover:scale-105 border border-bootcamp-orange/10 sm:p-4 lg:p-6">
                        <Users className="w-5 h-5 text-bootcamp-orange mx-auto mb-1 sm:w-6 sm:h-6 sm:mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                        <div className="text-lg font-bold text-bootcamp-orange sm:text-xl lg:text-2xl">100+</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Students Mentored</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center hover:from-green-100 hover:to-green-150 transition-all duration-300 transform hover:scale-105 border border-green-200 sm:p-4 lg:p-6">
                        <Code className="w-5 h-5 text-green-600 mx-auto mb-1 sm:w-6 sm:h-6 sm:mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                        <div className="text-lg font-bold text-green-600 sm:text-xl lg:text-2xl">50+</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">Projects Built</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 text-center hover:from-purple-100 hover:to-purple-150 transition-all duration-300 transform hover:scale-105 border border-purple-200 sm:p-4 lg:p-6">
                        <Award className="w-5 h-5 text-purple-600 mx-auto mb-1 sm:w-6 sm:h-6 sm:mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                        <div className="text-lg font-bold text-purple-600 sm:text-xl lg:text-2xl">Expert</div>
                        <div className="text-xs text-gray-600 sm:text-sm lg:text-base">React & JavaScript</div>
                      </div>
                    </div>

                    {/* Enhanced Unique Points */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 hover:from-gray-100 hover:to-gray-150 transition-colors duration-300 border border-gray-200 sm:p-4 lg:p-6">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg sm:mb-3 lg:mb-4 flex items-center">
                        <Star className="w-4 h-4 text-bootcamp-orange mr-2 fill-bootcamp-orange sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        What makes Durga unique:
                      </h5>
                      <ul className="space-y-1 text-gray-600 text-xs sm:space-y-2 sm:text-sm lg:text-base lg:space-y-3">
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0 text-sm sm:text-base lg:text-lg">✓</span>
                          <span>Simplifies complex concepts into digestible lessons</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0 text-sm sm:text-base lg:text-lg">✓</span>
                          <span>Focuses on practical, real-world application</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0 text-sm sm:text-base lg:text-lg">✓</span>
                          <span>Provides personalized feedback and career guidance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2 flex-shrink-0 text-sm sm:text-base lg:text-lg">✓</span>
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
