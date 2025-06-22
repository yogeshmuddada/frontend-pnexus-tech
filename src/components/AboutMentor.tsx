
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Code, Users, Briefcase } from "lucide-react";

const AboutMentor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-bootcamp-blue">Mentor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from an industry expert with real-world experience in building scalable applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Mentor Photo Section */}
                <div className="bg-gradient-to-br from-bootcamp-blue to-bootcamp-blue-dark p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-40 h-40 bg-bootcamp-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-6xl font-bold">DC</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Durga Chikkala</h3>
                    <p className="text-bootcamp-blue-light text-lg">Senior Frontend Engineer</p>
                    <Button 
                      className="mt-6 bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white"
                      onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                {/* Bio and Highlights Section */}
                <div className="p-12">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Learn from Durga?</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        With over <strong>6+ years</strong> of hands-on experience in frontend development, 
                        Durga has built scalable applications used by thousands of users. His passion for 
                        teaching and mentoring has helped <strong>100+ developers</strong> kickstart their careers.
                      </p>
                    </div>

                    {/* Highlight Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-bootcamp-blue/5 rounded-lg p-4 text-center">
                        <Briefcase className="w-8 h-8 text-bootcamp-blue mx-auto mb-2" />
                        <div className="text-2xl font-bold text-bootcamp-blue">6+ Years</div>
                        <div className="text-sm text-gray-600">Industry Experience</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-4 text-center">
                        <Users className="w-8 h-8 text-bootcamp-orange mx-auto mb-2" />
                        <div className="text-2xl font-bold text-bootcamp-orange">100+</div>
                        <div className="text-sm text-gray-600">Students Mentored</div>
                      </div>
                      <div className="bg-bootcamp-blue/5 rounded-lg p-4 text-center">
                        <Code className="w-8 h-8 text-bootcamp-blue mx-auto mb-2" />
                        <div className="text-2xl font-bold text-bootcamp-blue">50+</div>
                        <div className="text-sm text-gray-600">Projects Built</div>
                      </div>
                      <div className="bg-bootcamp-orange/5 rounded-lg p-4 text-center">
                        <Award className="w-8 h-8 text-bootcamp-orange mx-auto mb-2" />
                        <div className="text-2xl font-bold text-bootcamp-orange">Expert</div>
                        <div className="text-sm text-gray-600">React & JavaScript</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 mb-3">What makes Durga unique:</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2">•</span>
                          Simplifies complex concepts into digestible lessons
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2">•</span>
                          Focuses on practical, real-world application
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2">•</span>
                          Provides personalized feedback and career guidance
                        </li>
                        <li className="flex items-start">
                          <span className="text-bootcamp-orange mr-2">•</span>
                          Available for doubt-clearing even after bootcamp
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
