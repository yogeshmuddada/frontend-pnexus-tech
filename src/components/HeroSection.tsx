
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
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-10 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-4 w-24 h-24 sm:top-40 sm:right-10 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-bootcamp-orange rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:bottom-20 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] bg-bootcamp-blue-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-32 lg:px-8 lg:pt-32 lg:pb-40">
        {/* Limited Seats Banner */}
        <div className="text-center mb-6 lg:mb-10 animate-fade-in">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-4 py-2 text-sm font-semibold animate-glow sm:px-8 sm:py-3 sm:text-base lg:px-10 lg:py-4 lg:text-lg shadow-2xl">
            🔥 Only 30 Seats Available - Batch Starts Soon!
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center text-white max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 animate-fade-in leading-tight sm:text-6xl sm:mb-8 lg:text-8xl lg:mb-12 xl:text-9xl">
            Become a Frontend Pro in 
            <span className="text-bootcamp-orange block mt-2 lg:mt-4"> 30 Days</span> 🚀
          </h1>
          
          <p className="text-base mb-8 animate-fade-in opacity-90 leading-relaxed px-2 sm:text-2xl sm:mb-12 lg:text-3xl lg:mb-16 lg:leading-relaxed max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Join <strong>Durga Chikkala's</strong> immersive, beginner-friendly bootcamp.<br className="hidden sm:block" />
            Learn HTML, CSS, JavaScript, React, and build real projects.
          </p>

          {/* Enhanced Trust Signals */}
          <div className="flex flex-col gap-3 mb-8 animate-fade-in px-2 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-6 sm:mb-12 lg:gap-8 lg:mb-16" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg">
              <Users className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              <span>6+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg">
              <Calendar className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              <span>Live Interactive Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2.5 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              <span>4.9/5 Rating</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-bootcamp-blue transition-all duration-300 text-sm py-2.5 sm:text-base sm:py-3 lg:text-lg lg:py-4 lg:px-8 shadow-lg hover:shadow-2xl transform hover:scale-105"
              onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              LinkedIn Profile
            </Button>
          </div>

          {/* Enhanced CTA Button */}
          <div className="animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToEnroll}
              size="lg" 
              className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-4 px-8 rounded-full text-base shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:py-5 sm:px-12 sm:text-xl lg:py-6 lg:px-16 lg:text-2xl animate-glow"
            >
              Reserve My Seat Now 🎯
            </Button>
            <p className="text-sm mt-3 opacity-75 sm:text-base sm:mt-6 lg:text-lg lg:mt-8">🔒 Secure your spot - Payment on enrollment</p>
          </div>
        </div>

        {/* Enhanced Testimonial Preview */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-in px-4 sm:mt-20 lg:mt-28 lg:max-w-4xl" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 text-center text-white border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 sm:p-8 lg:p-12">
            <p className="text-base italic mb-4 sm:text-xl sm:mb-6 lg:text-2xl lg:mb-8 lg:leading-relaxed">
              "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks!"
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 bg-bootcamp-orange rounded-full flex items-center justify-center shadow-lg sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                <span className="text-white font-bold text-sm sm:text-base lg:text-xl">A</span>
              </div>
              <div>
                <p className="font-semibold text-base sm:text-lg lg:text-xl">Ankit Sharma</p>
                <p className="text-sm opacity-75 sm:text-base lg:text-lg">Previous Bootcamp Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
