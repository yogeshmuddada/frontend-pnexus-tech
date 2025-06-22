
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        onClick={scrollToEnroll}
        size="lg"
        className="bg-bootcamp-orange hover:bg-bootcamp-orange/90 text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-bootcamp-orange/25 transition-all duration-300 transform hover:scale-105 animate-glow"
      >
        🎯 Reserve My Seat
      </Button>
    </div>
  );
};

export default StickyButton;
