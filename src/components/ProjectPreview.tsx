
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Zap } from "lucide-react";

const ProjectPreview = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-6">
            Your <span className="text-bootcamp-blue">Final Project</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed lg:leading-relaxed px-2">
            By the end of this bootcamp, you'll build a complete, professional portfolio website that showcases your skills to potential employers
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Project Mockup - Fixed for mobile */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Browser Frame */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Browser Top Bar */}
                  <div className="bg-gray-100 px-3 py-2 flex items-center lg:px-4 lg:py-3">
                    <div className="flex space-x-1.5 lg:space-x-2">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full lg:w-3 lg:h-3"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full lg:w-3 lg:h-3"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full lg:w-3 lg:h-3"></div>
                    </div>
                    <div className="ml-3 bg-white rounded-lg px-2 py-1 text-xs text-gray-600 flex-1 truncate lg:ml-4 lg:px-3 lg:py-1.5 lg:text-sm">
                      yourname.github.io/portfolio
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="p-3 lg:p-6 space-y-3 lg:space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-4 bg-bootcamp-blue rounded lg:w-24 lg:h-6"></div>
                      <div className="flex space-x-1.5 lg:space-x-2">
                        <div className="w-8 h-3 bg-gray-300 rounded lg:w-12 lg:h-4"></div>
                        <div className="w-8 h-3 bg-gray-300 rounded lg:w-12 lg:h-4"></div>
                        <div className="w-8 h-3 bg-bootcamp-orange rounded lg:w-12 lg:h-4"></div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="text-center py-4 lg:py-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-bootcamp-blue to-bootcamp-orange rounded-full mx-auto mb-2 lg:w-16 lg:h-16 lg:mb-3"></div>
                      <div className="w-24 h-3 bg-gray-800 rounded mx-auto mb-1 lg:w-32 lg:h-4 lg:mb-2"></div>
                      <div className="w-16 h-2 bg-gray-400 rounded mx-auto mb-2 lg:w-20 lg:h-3 lg:mb-3"></div>
                      <div className="w-12 h-4 bg-bootcamp-orange rounded mx-auto lg:w-16 lg:h-5"></div>
                    </div>
                    
                    {/* Projects Grid */}
                    <div className="grid grid-cols-3 gap-1.5 lg:gap-2">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                      <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-bootcamp-orange rounded-full flex items-center justify-center shadow-2xl animate-float lg:-top-4 lg:-right-4 lg:w-16 lg:h-16">
                <Code className="w-6 h-6 text-white lg:w-8 lg:h-8" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-bootcamp-blue rounded-full flex items-center justify-center shadow-2xl animate-float lg:-bottom-4 lg:-left-4 lg:w-14 lg:h-14" style={{ animationDelay: '1s' }}>
                <Globe className="w-5 h-5 text-white lg:w-7 lg:h-7" />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 sm:text-2xl lg:text-3xl lg:mb-4">
                  Build a Complete Portfolio Website
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed sm:text-base lg:text-lg lg:leading-relaxed">
                  Your final project will be a stunning, responsive portfolio website that showcases 
                  all the projects you've built during the bootcamp. It will serve as your professional 
                  calling card when applying for jobs.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <Card className="border-0 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-3 text-center lg:p-4">
                    <Globe className="w-6 h-6 text-bootcamp-blue mx-auto mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs lg:text-sm lg:mb-2">Fully Responsive</h4>
                    <p className="text-xs text-gray-600 lg:text-sm">Works perfectly on all devices</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-orange-50 hover:bg-orange-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-3 text-center lg:p-4">
                    <Zap className="w-6 h-6 text-bootcamp-orange mx-auto mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs lg:text-sm lg:mb-2">Interactive</h4>
                    <p className="text-xs text-gray-600 lg:text-sm">Dynamic animations and effects</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-green-50 hover:bg-green-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-3 text-center lg:p-4">
                    <Code className="w-6 h-6 text-green-600 mx-auto mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs lg:text-sm lg:mb-2">Clean Code</h4>
                    <p className="text-xs text-gray-600 lg:text-sm">Professional, maintainable code</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-purple-50 hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-3 text-center lg:p-4">
                    <Smartphone className="w-6 h-6 text-purple-600 mx-auto mb-2 lg:w-8 lg:h-8 lg:mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs lg:text-sm lg:mb-2">Modern Design</h4>
                    <p className="text-xs text-gray-600 lg:text-sm">Latest UI/UX best practices</p>
                  </CardContent>
                </Card>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-3xl p-4 hover:bg-gray-100 transition-colors duration-300 lg:p-6">
                <h4 className="font-bold text-gray-900 mb-3 text-sm lg:text-lg lg:mb-4">Your portfolio will include:</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-2 mt-0.5 text-sm lg:text-base">✓</span>
                    <span className="text-gray-700 text-xs lg:text-sm">Professional About Me section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-2 mt-0.5 text-sm lg:text-base">✓</span>
                    <span className="text-gray-700 text-xs lg:text-sm">Showcase of all your bootcamp projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-2 mt-0.5 text-sm lg:text-base">✓</span>
                    <span className="text-gray-700 text-xs lg:text-sm">Skills and technologies section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-2 mt-0.5 text-sm lg:text-base">✓</span>
                    <span className="text-gray-700 text-xs lg:text-sm">Contact form and social media links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-2 mt-0.5 text-sm lg:text-base">✓</span>
                    <span className="text-gray-700 text-xs lg:text-sm">Deployed live on GitHub Pages</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-bootcamp-blue hover:bg-bootcamp-blue-dark text-white px-6 py-3 text-sm w-full max-w-xs mx-auto lg:w-auto lg:px-8 lg:py-4 lg:text-base shadow-2xl hover:shadow-bootcamp-blue/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const enrollSection = document.getElementById('Register');
                    enrollSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Building Your Portfolio Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
