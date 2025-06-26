
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yogi Muddada",
      role: "Freelance Web Developer",
      image: "YM",
      rating: 5,
      testimonial: "Durga's teaching style is exceptional. I went from zero to building my first React app in just 3 weeks! The hands-on approach and real-world projects made all the difference.",
      bgColor: "bg-pink-500"
    },
    {
      name: "Devika Rani", 
      role: "UI Developer at StartupHub",
      image: "DR",
      rating: 5,
      testimonial: "Your classes are very friendly.your classes are enough to one who don't have even basic knowledge on programming.I can say that your classes helped me alot..",
      bgColor: "bg-blue-500"
    },
    {
      name: "Hari Priya",
      role: "Previous Bootcamp Graduate",
      image: "HP", 
      rating: 5,
      testimonial: "I have understood clearly all the concepts explained.your teaching is superb nothing is hard for me.!",
      bgColor: "bg-green-500"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-bootcamp-blue">Students Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Don't just take our word for it - hear from graduates who transformed their careers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4 sm:mb-6">
                    <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-bootcamp-orange opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg`}>
                      <span className="text-white font-bold text-xs sm:text-sm">{testimonial.image}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Social Proof */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Join 50+ Successful Graduates</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-blue mb-2">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Completion Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-orange mb-2">4.9/5</div>
                <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-orange mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
