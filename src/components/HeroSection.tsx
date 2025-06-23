
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
        <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-4 w-20 h-20 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-bootcamp-orange rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:bottom-20 sm:w-72 sm:h-72 bg-bootcamp-blue-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-32 lg:px-8">
        {/* Limited Seats Banner */}
        <div className="text-center mb-6 animate-fade-in">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-3 py-1.5 text-xs font-semibold animate-glow sm:px-6 sm:py-2 sm:text-sm">
            🔥 Only 30 Seats Available - Batch Starts Soon!
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-3 animate-fade-in leading-tight sm:text-5xl sm:mb-6 md:text-6xl lg:text-7xl">
            Become a Frontend Pro in 
            <span className="text-bootcamp-orange block"> 30 Days</span> 🚀
          </h1>
          
          <p className="text-sm mb-6 animate-fade-in opacity-90 leading-relaxed px-2 sm:text-xl sm:mb-8 md:text-2xl" style={{ animationDelay: '0.2s' }}>
            Join <strong>Durga Chikkala's</strong> immersive, beginner-friendly bootcamp.<br className="hidden sm:block" />
            Learn HTML, CSS, JavaScript, React, and build real projects.
          </p>

          {/* Enhanced Trust Signals */}
          <div className="flex flex-col gap-2 mb-6 animate-fade-in px-2 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-4 sm:mb-10" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              <Users className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>6+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              <Calendar className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Live Interactive Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 sm:w-5 sm:h-5" />
              <span>4.9/5 Rating</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-bootcamp-blue transition-all duration-300 text-xs py-1.5 sm:text-sm sm:py-2"
              onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1.5 sm:w-4 sm:h-4 sm:mr-2" />
              LinkedIn Profile
            </Button>
          </div>

          {/* Enhanced CTA Button */}
          <div className="animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToEnroll}
              size="lg" 
              className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-3 px-6 rounded-full text-sm shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:py-4 sm:px-8 sm:text-lg"
            >
              Reserve My Seat Now 🎯
            </Button>
            <p className="text-xs mt-2 opacity-75 sm:text-sm sm:mt-4">🔒 Secure your spot - Payment on enrollment</p>
          </div>
        </div>

        {/* Enhanced Testimonial Preview */}
        <div className="mt-12 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center text-white sm:p-6">
            <p className="text-sm italic mb-3 sm:text-lg sm:mb-4">
              "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks!"
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-8 h-8 bg-bootcamp-orange rounded-full flex items-center justify-center sm:w-10 sm:h-10">
                <span className="text-white font-bold text-xs sm:text-sm">A</span>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Ankit Sharma</p>
                <p className="text-xs opacity-75 sm:text-sm">Previous Bootcamp Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
