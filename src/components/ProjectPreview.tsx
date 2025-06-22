
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Zap } from "lucide-react";

const ProjectPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="text-bootcamp-blue">Final Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By the end of this bootcamp, you'll build a complete, professional portfolio website that showcases your skills to potential employers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
                {/* Browser Frame */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Browser Top Bar */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 bg-white rounded px-3 py-1 text-sm text-gray-600 flex-1">
                      yourname.github.io/portfolio
                    </div>
                  </div>
                  
                  {/* Website Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-32 h-8 bg-bootcamp-blue rounded"></div>
                      <div className="flex space-x-2">
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                        <div className="w-16 h-6 bg-bootcamp-orange rounded"></div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="text-center py-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-bootcamp-blue to-bootcamp-orange rounded-full mx-auto mb-4"></div>
                      <div className="w-48 h-6 bg-gray-800 rounded mx-auto mb-2"></div>
                      <div className="w-32 h-4 bg-gray-400 rounded mx-auto mb-4"></div>
                      <div className="w-24 h-8 bg-bootcamp-orange rounded mx-auto"></div>
                    </div>
                    
                    {/* Projects Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                      <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-bootcamp-orange rounded-full flex items-center justify-center shadow-lg animate-float">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-bootcamp-blue rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Build a Complete Portfolio Website
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your final project will be a stunning, responsive portfolio website that showcases 
                  all the projects you've built during the bootcamp. It will serve as your professional 
                  calling card when applying for jobs.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <Globe className="w-8 h-8 text-bootcamp-blue mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Fully Responsive</h4>
                    <p className="text-sm text-gray-600">Works perfectly on all devices</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-orange-50">
                  <CardContent className="p-4 text-center">
                    <Zap className="w-8 h-8 text-bootcamp-orange mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Interactive</h4>
                    <p className="text-sm text-gray-600">Dynamic animations and effects</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Clean Code</h4>
                    <p className="text-sm text-gray-600">Professional, maintainable code</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-purple-50">
                  <CardContent className="p-4 text-center">
                    <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Modern Design</h4>
                    <p className="text-sm text-gray-600">Latest UI/UX best practices</p>
                  </CardContent>
                </Card>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Your portfolio will include:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Professional About Me section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Showcase of all your bootcamp projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Skills and technologies section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Contact form and social media links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bootcamp-orange mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Deployed live on GitHub Pages</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-bootcamp-blue hover:bg-bootcamp-blue-dark text-white px-8 py-3"
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
