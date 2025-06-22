
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose This <span className="text-bootcamp-blue">Bootcamp?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just coding lessons - it's a complete transformation journey designed for your success
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${benefit.bgGradient} hover:scale-105 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-bootcamp-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-blue-dark rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Our Commitment to Your Success</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-bootcamp-orange mb-2">24/7</div>
                <div className="text-sm opacity-90">Community Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bootcamp-orange mb-2">1:1</div>
                <div className="text-sm opacity-90">Mentoring Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bootcamp-orange mb-2">100%</div>
                <div className="text-sm opacity-90">Practical Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
