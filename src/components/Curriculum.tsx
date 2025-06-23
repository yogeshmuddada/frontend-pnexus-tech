
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

        {/* Weekly Timeline - Improved Desktop Layout */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          {/* Mobile: Stack Layout */}
          <div className="space-y-6 sm:hidden">
            {modules.map((module, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 animate-fade-in">
                <CardHeader className={`${module.color} text-white rounded-t-lg p-4`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{module.title}</CardTitle>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                      {module.week}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-3 text-sm">{module.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Skills:</h4>
                    <div className="grid grid-cols-1 gap-1.5">
                      {module.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-bootcamp-orange rounded-full mr-2"></div>
                          <span className="text-xs text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop: Grid Layout with Timeline */}
          <div className="hidden sm:block">
            {/* Timeline Line */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-bootcamp-blue/20"></div>
              
              <div className="space-y-20">
                {modules.map((module, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-bootcamp-blue rounded-full flex items-center justify-center z-10 shadow-lg">
                      <module.icon className="w-8 h-8 text-bootcamp-blue" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 animate-fade-in transform hover:scale-105">
                        <CardHeader className={`${module.color} text-white rounded-t-lg p-6`}>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold">{module.title}</CardTitle>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                              {module.week}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <p className="text-gray-600 mb-4 text-base leading-relaxed">{module.description}</p>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 mb-3 text-base">Key Skills:</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {module.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center">
                                  <div className="w-2 h-2 bg-bootcamp-orange rounded-full mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 font-medium">{skill}</span>
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
          </div>
        </div>

        {/* Additional Skills Grid - Improved Layout */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-bold text-center text-gray-900 mb-6 sm:text-2xl sm:mb-10">Plus These Essential Skills</h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:scale-105">
                <CardContent className="p-4 sm:p-8">
                  <div className="w-12 h-12 bg-bootcamp-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:w-20 sm:h-20 sm:mb-6">
                    <skill.icon className="w-6 h-6 text-bootcamp-blue sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-lg">{skill.title}</h4>
                  <p className="text-xs text-gray-600 sm:text-base leading-relaxed">{skill.desc}</p>
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
