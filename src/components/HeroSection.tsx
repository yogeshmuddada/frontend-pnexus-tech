
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-bootcamp-gradient-start to-bootcamp-gradient-end overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-bootcamp-orange rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-bootcamp-blue-light rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        {/* Limited Seats Banner */}
        <div className="text-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-bootcamp-orange text-white px-6 py-2 text-sm font-semibold animate-glow">
            🔥 Only 30 Seats Available - Batch Starts Soon!
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Become a Frontend Pro in 
            <span className="text-bootcamp-orange"> 30 Days</span> 🚀
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Join <strong>Durga Chikkala's</strong> immersive, beginner-friendly bootcamp.<br />
            Learn HTML, CSS, JavaScript, React, and build real projects.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">6+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Live Interactive Sessions</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-bootcamp-blue transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/durga-chikkala', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToEnroll}
              size="lg" 
              className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105"
            >
              Reserve My Seat Now 🎯
            </Button>
            <p className="text-sm mt-4 opacity-75">🔒 Secure your spot - Payment on enrollment</p>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
            <p className="text-lg italic mb-4">
              "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-bootcamp-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <p className="font-semibold">Ankit Sharma</p>
                <p className="text-sm opacity-75">Previous Bootcamp Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
