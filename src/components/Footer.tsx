
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* About */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-bootcamp-orange">
                Frontend Pro Bootcamp
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Transform your career in just 30 days with our intensive, hands-on frontend development bootcamp.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-bootcamp-blue hover:border-bootcamp-blue text-xs sm:text-sm"
                  onClick={() => window.open('https://linkedin.com/in/durgach', '_blank')}
                >
                  <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-bootcamp-orange hover:border-bootcamp-orange text-xs sm:text-sm"
                  onClick={() => window.open('https://github.com/Durga-chikkala', '_blank')}
                >
                  <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  <a href="#curriculum" className="hover:text-bootcamp-orange transition-colors">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#mentor" className="hover:text-bootcamp-orange transition-colors">
                    About Mentor
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-bootcamp-orange transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-bootcamp-orange transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-bootcamp-orange transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-3 text-bootcamp-orange flex-shrink-0" />
                  <a 
                    href="mailto:durgachikkaladev@gmail.com" 
                    className="hover:text-bootcamp-orange transition-colors text-sm sm:text-base break-all"
                  >
                    durgachikkaladev@gmail.com
                  </a>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mt-4">
                  <h5 className="font-semibold text-bootcamp-orange mb-2 text-sm sm:text-base">Ready to Start?</h5>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">
                    Have questions? Want to discuss the bootcamp? 
                  </p>
                  <Button 
                    size="sm"
                    className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white w-full text-xs sm:text-sm"
                    onClick={() => window.open('mailto:durgachikkaladev@gmail.com?subject=Frontend Bootcamp Inquiry', '_blank')}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6 sm:my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-4 sm:space-y-0">
            <div className="flex items-center text-center sm:text-left">
              <span>Made with</span>
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 mx-2 text-red-500 fill-current" />
              <span>by</span>
              <a 
                href="https://linkedin.com/in/durgach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-bootcamp-orange hover:text-bootcamp-orange/80 font-semibold transition-colors"
              >
                Durga Chikkala
              </a>
            </div>
            <div className="text-center">
              <p>&copy; {currentYear} Frontend Pro Bootcamp. All rights reserved.</p>
              <p className="mt-1">Empowering the next generation of developers</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-orange rounded-2xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold mb-2">🚀 Ready to Transform Your Career?</h4>
              <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">Join 30 ambitious developers in this life-changing journey</p>
              <Button 
                className="bg-white text-bootcamp-blue hover:bg-gray-100 font-bold text-sm sm:text-base w-full sm:w-auto"
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reserve Your Seat Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
