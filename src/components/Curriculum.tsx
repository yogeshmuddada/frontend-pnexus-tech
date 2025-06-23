
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Zap, Globe, GitBranch, Smartphone, Component, Trophy } from "lucide-react";

const Curriculum = () => {
  const modules = [
    {
      week: "Week 1",
      icon: Code,
      title: "HTML & CSS Foundations",
      description: "Master semantic HTML and modern CSS including Flexbox and Grid",
      skills: ["HTML5 Semantics", "CSS3 Styling", "Flexbox", "CSS Grid"],
      color: "bg-blue-500"
    },
    {
      week: "Week 2", 
      icon: Zap,
      title: "JavaScript Fundamentals",
      description: "Learn core JavaScript concepts and DOM manipulation",
      skills: ["ES6+ Syntax", "DOM Manipulation", "Event Handling", "Async JavaScript"],
      color: "bg-yellow-500"
    },
    {
      week: "Week 3",
      icon: Component,
      title: "React Development",
      description: "Build interactive UIs with React components and hooks",
      skills: ["Components", "Props & State", "Hooks", "Event Handling"],
      color: "bg-cyan-500"
    },
    {
      week: "Week 4",
      icon: Trophy,
      title: "Final Project & Portfolio",
      description: "Create a complete project and deploy your portfolio",
      skills: ["Project Planning", "Git & GitHub", "Deployment", "Portfolio Creation"],
      color: "bg-green-500"
    }
  ];

  const additionalSkills = [
    { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first approach" },
    { icon: GitBranch, title: "Version Control", desc: "Git & GitHub workflow" },
    { icon: Globe, title: "Web Standards", desc: "Best practices & SEO" },
    { icon: Palette, title: "UI/UX Basics", desc: "Design principles" }
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 sm:text-4xl sm:mb-4 md:text-5xl">
            What You'll <span className="text-bootcamp-blue">Master</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto px-2 sm:text-xl">
            A carefully crafted curriculum that takes you from beginner to job-ready frontend developer in just 30 days
          </p>
        </div>

        {/* Weekly Timeline - Mobile Stack */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="space-y-6 sm:space-y-0 sm:relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-bootcamp-blue/20"></div>
            
            {modules.map((module, index) => (
              <div key={index} className={`relative sm:flex sm:items-center sm:justify-center sm:mb-16 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-bootcamp-blue rounded-full flex items-center justify-center z-10">
                  <module.icon className="w-6 h-6 text-bootcamp-blue" />
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 animate-fade-in">
                    <CardHeader className={`${module.color} text-white rounded-t-lg p-4 sm:p-6`}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold sm:text-xl">{module.title}</CardTitle>
                        <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium sm:px-3 sm:text-sm">
                          {module.week}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-gray-600 mb-3 text-sm sm:text-base sm:mb-4">{module.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base sm:mb-3">Key Skills:</h4>
                        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
                          {module.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-bootcamp-orange rounded-full mr-2 sm:w-2 sm:h-2"></div>
                              <span className="text-xs text-gray-700 sm:text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-center text-gray-900 mb-6 sm:text-2xl sm:mb-8">Plus These Essential Skills</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-3 sm:p-6">
                  <div className="w-10 h-10 bg-bootcamp-blue/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:w-16 sm:h-16 sm:mb-4">
                    <skill.icon className="w-5 h-5 text-bootcamp-blue sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-xs sm:text-base sm:mb-2">{skill.title}</h4>
                  <p className="text-xs text-gray-600 sm:text-sm">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl p-6 shadow-lg sm:mt-16 sm:p-8">
          <div className="text-center mb-4 sm:mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2 sm:text-xl">Your Learning Journey</h4>
            <p className="text-sm text-gray-600 sm:text-base">Track your progress through the bootcamp</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between text-xs font-medium text-gray-700 sm:text-sm">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Job Ready</span>
            </div>
            <Progress value={75} className="h-2 sm:h-3" />
            <p className="text-center text-xs text-gray-600 sm:text-sm">
              30 days to frontend mastery 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
