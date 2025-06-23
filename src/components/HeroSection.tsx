
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Calendar, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-bootcamp-gradient-start to-bootcamp-gradient-end overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-32 sm:w-72 h-32 sm:h-72 bg-bootcamp-orange rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-32 sm:w-72 h-32 sm:h-72 bg-bootcamp-blue-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-32">
        {/* Limited Seats Banner */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold animate-glow">
            🔥 Only 30 Seats Available - Batch Starts Soon!
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            Become a Frontend Pro in 
            <span className="text-bootcamp-orange block sm:inline"> 30 Days</span> 🚀
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in opacity-90 leading-relaxed px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
            Join <strong>Durga Chikkala's</strong> immersive, beginner-friendly bootcamp.<br className="hidden sm:block" />
            Learn HTML, CSS, JavaScript, React, and build real projects.
          </p>

          {/* Enhanced Trust Signals */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-10 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              <Users className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">6+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Live Interactive Sessions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium">4.9/5 Rating</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-bootcamp-blue transition-all duration-300 text-xs sm:text-sm"
              onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
            >
              <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>

          {/* Enhanced CTA Button */}
          <div className="animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToEnroll}
              size="lg" 
              className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Reserve My Seat Now 🎯
            </Button>
            <p className="text-xs sm:text-sm mt-3 sm:mt-4 opacity-75">🔒 Secure your spot - Payment on enrollment</p>
          </div>
        </div>

        {/* Enhanced Testimonial Preview */}
        <div className="mt-12 sm:mt-20 max-w-2xl mx-auto animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center text-white">
            <p className="text-sm sm:text-lg italic mb-4">
              "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-bootcamp-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">A</span>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Ankit Sharma</p>
                <p className="text-xs sm:text-sm opacity-75">Previous Bootcamp Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
