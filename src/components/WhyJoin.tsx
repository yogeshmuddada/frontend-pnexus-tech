
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
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
            Why Choose This <span className="text-bootcamp-blue">Bootcamp?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed lg:leading-relaxed">
            More than just coding lessons - it's a complete transformation journey designed for your success
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${benefit.bgGradient} hover:scale-105 cursor-pointer animate-fade-in hover:shadow-${benefit.color.split('-')[1]}-500/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                  <div className={`w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <benefit.icon className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 group-hover:text-bootcamp-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl lg:leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Additional Trust Elements */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-28">
          <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">🎯 Our Commitment to Your Success</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bootcamp-orange mb-3 lg:mb-4">24/7</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">Community Support</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bootcamp-orange mb-3 lg:mb-4">1:1</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">Mentoring Sessions</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bootcamp-orange mb-3 lg:mb-4">100%</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">Practical Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
