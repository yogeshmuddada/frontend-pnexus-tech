
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You'll <span className="text-bootcamp-blue">Master</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A carefully crafted curriculum that takes you from beginner to job-ready frontend developer in just 30 days
          </p>
        </div>

        {/* Weekly Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-bootcamp-blue/20"></div>
            
            {modules.map((module, index) => (
              <div key={index} className={`relative flex items-center justify-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-bootcamp-blue rounded-full flex items-center justify-center z-10">
                  <module.icon className="w-6 h-6 text-bootcamp-blue" />
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 animate-fade-in">
                    <CardHeader className={`${module.color} text-white rounded-t-lg`}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold">{module.title}</CardTitle>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                          {module.week}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {module.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-bootcamp-orange rounded-full mr-2"></div>
                              <span className="text-sm text-gray-700">{skill}</span>
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
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Plus These Essential Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bootcamp-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-8 h-8 text-bootcamp-blue" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-600">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Your Learning Journey</h4>
            <p className="text-gray-600">Track your progress through the bootcamp</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Job Ready</span>
            </div>
            <Progress value={75} className="h-3" />
            <p className="text-center text-sm text-gray-600">
              30 days to frontend mastery 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
