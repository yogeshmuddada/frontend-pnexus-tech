
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Zap } from "lucide-react";

const ProjectPreview = () => {
  return (
    <section className="py-16 bg-white sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
            Your <span className="text-bootcamp-blue">Final Project</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed lg:leading-relaxed">
            By the end of this bootcamp, you'll build a complete, professional portfolio website that showcases your skills to potential employers
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Project Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Browser Frame */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Browser Top Bar */}
                  <div className="bg-gray-100 px-6 py-4 flex items-center lg:px-8 lg:py-6">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full lg:w-5 lg:h-5"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full lg:w-5 lg:h-5"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full lg:w-5 lg:h-5"></div>
                    </div>
                    <div className="ml-6 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 flex-1 lg:ml-8 lg:px-6 lg:py-3 lg:text-base">
                      yourname.github.io/portfolio
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="p-6 lg:p-10 space-y-6 lg:space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-32 h-8 bg-bootcamp-blue rounded-lg lg:w-40 lg:h-10"></div>
                      <div className="flex space-x-3">
                        <div className="w-16 h-6 bg-gray-300 rounded lg:w-20 lg:h-8"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded lg:w-20 lg:h-8"></div>
                        <div className="w-16 h-6 bg-bootcamp-orange rounded lg:w-20 lg:h-8"></div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="text-center py-8 lg:py-12">
                      <div className="w-24 h-24 bg-gradient-to-br from-bootcamp-blue to-bootcamp-orange rounded-full mx-auto mb-4 lg:w-32 lg:h-32 lg:mb-6"></div>
                      <div className="w-48 h-6 bg-gray-800 rounded mx-auto mb-2 lg:w-64 lg:h-8 lg:mb-4"></div>
                      <div className="w-32 h-4 bg-gray-400 rounded mx-auto mb-4 lg:w-40 lg:h-6 lg:mb-6"></div>
                      <div className="w-24 h-8 bg-bootcamp-orange rounded mx-auto lg:w-32 lg:h-10"></div>
                    </div>
                    
                    {/* Projects Grid */}
                    <div className="grid grid-cols-3 gap-3 lg:gap-4">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                      <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-bootcamp-orange rounded-full flex items-center justify-center shadow-2xl animate-float lg:-top-8 lg:-right-8 lg:w-24 lg:h-24">
                <Code className="w-10 h-10 text-white lg:w-12 lg:h-12" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-bootcamp-blue rounded-full flex items-center justify-center shadow-2xl animate-float lg:-bottom-8 lg:-left-8 lg:w-20 lg:h-20" style={{ animationDelay: '1s' }}>
                <Globe className="w-8 h-8 text-white lg:w-10 lg:h-10" />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl lg:text-5xl lg:mb-8">
                  Build a Complete Portfolio Website
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed sm:text-xl lg:text-2xl lg:leading-relaxed">
                  Your final project will be a stunning, responsive portfolio website that showcases 
                  all the projects you've built during the bootcamp. It will serve as your professional 
                  calling card when applying for jobs.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <Card className="border-0 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center lg:p-8">
                    <Globe className="w-10 h-10 text-bootcamp-blue mx-auto mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg lg:mb-3">Fully Responsive</h4>
                    <p className="text-sm text-gray-600 lg:text-base">Works perfectly on all devices</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-orange-50 hover:bg-orange-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center lg:p-8">
                    <Zap className="w-10 h-10 text-bootcamp-orange mx-auto mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg lg:mb-3">Interactive</h4>
                    <p className="text-sm text-gray-600 lg:text-base">Dynamic animations and effects</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-green-50 hover:bg-green-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center lg:p-8">
                    <Code className="w-10 h-10 text-green-600 mx-auto mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg lg:mb-3">Clean Code</h4>
                    <p className="text-sm text-gray-600 lg:text-base">Professional, maintainable code</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-purple-50 hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center lg:p-8">
                    <Smartphone className="w-10 h-10 text-purple-600 mx-auto mb-3 lg:w-12 lg:h-12 lg:mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg lg:mb-3">Modern Design</h4>
                    <p className="text-sm text-gray-600 lg:text-base">Latest UI/UX best practices</p>
                  </CardContent>
                </Card>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="font-bold text-gray-900 mb-6 text-xl lg:text-2xl lg:mb-8">Your portfolio will include:</h4>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-4 mt-1 text-xl lg:text-2xl">✓</span>
                    <span className="text-gray-700 text-base lg:text-lg">Professional About Me section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-4 mt-1 text-xl lg:text-2xl">✓</span>
                    <span className="text-gray-700 text-base lg:text-lg">Showcase of all your bootcamp projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-4 mt-1 text-xl lg:text-2xl">✓</span>
                    <span className="text-gray-700 text-base lg:text-lg">Skills and technologies section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-4 mt-1 text-xl lg:text-2xl">✓</span>
                    <span className="text-gray-700 text-base lg:text-lg">Contact form and social media links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-4 mt-1 text-xl lg:text-2xl">✓</span>
                    <span className="text-gray-700 text-base lg:text-lg">Deployed live on GitHub Pages</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-bootcamp-blue hover:bg-bootcamp-blue-dark text-white px-10 py-4 text-lg lg:px-12 lg:py-5 lg:text-xl shadow-2xl hover:shadow-bootcamp-blue/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const enrollSection = document.getElementById('pricing');
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
