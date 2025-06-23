
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, GraduationCap, MessageCircle, Trophy } from "lucide-react";

const WhyJoin = () => {
  const benefits = [
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build 5+ real-world projects including a complete portfolio website",
      color: "bg-blue-500",
      bgGradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: Users,
      title: "Peer Community",
      description: "Connect with fellow learners, collaborate, and grow together",
      color: "bg-green-500",
      bgGradient: "from-green-500/10 to-green-600/10"
    },
    {
      icon: Briefcase,
      title: "Portfolio Creation",
      description: "Graduate with a professional portfolio that showcases your skills",
      color: "bg-purple-500",
      bgGradient: "from-purple-500/10 to-purple-600/10"
    },
    {
      icon: MessageCircle,
      title: "Live Sessions",
      description: "Interactive classes with real-time doubt solving and Q&A",
      color: "bg-orange-500",
      bgGradient: "from-orange-500/10 to-orange-600/10"
    },
    {
      icon: GraduationCap,
      title: "Certificate on Completion",
      description: "Receive a verified certificate to boost your professional profile",
      color: "bg-indigo-500",
      bgGradient: "from-indigo-500/10 to-indigo-600/10"
    },
    {
      icon: Trophy,
      title: "Career Guidance",
      description: "Get personalized advice on job applications and interview prep",
      color: "bg-red-500",
      bgGradient: "from-red-500/10 to-red-600/10"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose This <span className="text-bootcamp-blue">Bootcamp?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            More than just coding lessons - it's a complete transformation journey designed for your success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${benefit.bgGradient} hover:scale-105 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-bootcamp-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Trust Elements */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">🎯 Our Commitment to Your Success</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-orange mb-2">24/7</div>
                <div className="text-xs sm:text-sm opacity-90">Community Support</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-orange mb-2">1:1</div>
                <div className="text-xs sm:text-sm opacity-90">Mentoring Sessions</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-bootcamp-orange mb-2">100%</div>
                <div className="text-xs sm:text-sm opacity-90">Practical Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
