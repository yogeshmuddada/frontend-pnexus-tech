
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuthButton } from "@/components/AuthButton";
import { ExternalLink, Users, Calendar, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-gradient-to-br from-bootcamp-gradient-start to-bootcamp-gradient-end overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-10 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-4 w-24 h-24 sm:top-40 sm:right-10 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-bootcamp-orange rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:bottom-20 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem] bg-bootcamp-blue-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-28">
        {/* Header with Login Button */}
        <div className="flex justify-end mb-4 lg:mb-8">
          <AuthButton />
        </div>

        {/* Limited Seats Banner */}
        <div className="text-center mb-4 lg:mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-3 py-2 text-xs font-semibold animate-glow sm:px-6 sm:py-2 sm:text-sm lg:px-8 lg:py-3 lg:text-base shadow-2xl">
            🔥 Only 30 Seats Available - Batch Starts Soon!
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center text-white max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-3 animate-fade-in leading-tight sm:text-4xl sm:mb-6 lg:text-6xl lg:mb-8 xl:text-7xl">
            Become a Frontend Pro in 
            <span className="text-bootcamp-orange block mt-1 lg:mt-2"> 30 Days</span> 🚀
          </h1>
          
          <p className="text-sm mb-6 animate-fade-in opacity-90 leading-relaxed px-2 sm:text-lg sm:mb-8 lg:text-xl lg:mb-10 lg:leading-relaxed max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Join <strong>Durga Chikkala's</strong> immersive, beginner-friendly bootcamp.<br className="hidden sm:block" />
            Learn HTML, CSS, JavaScript, React, and build real projects.
          </p>

          {/* Enhanced Trust Signals */}
          <div className="flex flex-col gap-2 mb-6 animate-fade-in px-2 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-4 sm:mb-8 lg:gap-6 lg:mb-10" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-2 text-xs font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span>3+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-2 text-xs font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span>Live Interactive Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-3 py-2 text-xs font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Enhanced CTA Button - Fixed for mobile */}
          <div className="animate-fade-in px-2" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToEnroll}
              size="lg" 
              className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-3 px-6 rounded-full text-sm shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 w-full max-w-xs mx-auto sm:w-auto sm:py-4 sm:px-8 sm:text-base lg:py-5 lg:px-12 lg:text-lg animate-glow"
            >
              Reserve My Seat Now 🎯
            </Button>
            <p className="text-xs mt-2 opacity-75 sm:text-sm sm:mt-4 lg:text-base lg:mt-6">🔒 Secure your spot - Payment on enrollment</p>
          </div>
        </div>

        {/* Enhanced Testimonial Preview */}
        <div className="mt-10 max-w-3xl mx-auto animate-fade-in px-4 sm:mt-16 lg:mt-20 lg:max-w-4xl" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-4 text-center text-white border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 sm:p-6 lg:p-8">
            <p className="text-sm italic mb-3 sm:text-base sm:mb-4 lg:text-lg lg:mb-6 lg:leading-relaxed">
              "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks!"
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-8 h-8 bg-bootcamp-orange rounded-full flex items-center justify-center shadow-lg sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-base">A</span>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base lg:text-lg">Ankit Sharma</p>
                <p className="text-xs opacity-75 sm:text-sm lg:text-base">Previous Bootcamp Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
