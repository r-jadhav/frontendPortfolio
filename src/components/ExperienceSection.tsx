import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Make My Business Online (MMBO)",
      location: "Delhi",
      period: "2024 - Present",
      description:
        "Leading frontend development projects, mentoring junior developers, and implementing modern React.js solutions for enterprise clients.",
      achievements: [
        "Built 20+ e-commerce websites with Laravel, Shopify, Wordpress",
        "Reduced application load time by 40% through optimization",
        "Improved client satisfaction scores by 35%",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Developer",
      company: "United Technologies (UTS)",
      location: "Remote",
      period: "2023 - 2024",
      description:
        "Developed full-stack web applications using React.js, Node.js, and various CMS platforms including WordPress and Shopify.",
      achievements: [
        "Delivered 10+ React applications with 99.9% uptime",
        "Created 4+ mobile apps with React Native",
        "Led a team of 4 developers on major client projects",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend Developer",
      company: "Laurel IT",
      location: "Indore",
      period: "2019 - 2023",
      description:
        "Focused on creating responsive web applications and mobile-first designs using modern frontend technologies.",
      achievements: [
        "Developed 20+ responsive websites",
        "Implemented modern UI/UX design principles",
        "Collaborated with design team on user experience improvements",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "50+", label: "Websites Delivered", icon: TrendingUp },
    { number: "5+", label: "Years Experience", icon: Calendar },
    { number: "4+", label: "Mobile Apps", icon: Briefcase },
    { number: "100%", label: "Client Satisfaction", icon: Award },
  ];

  return (
    <section
      className="py-24 bg-gray-900 relative overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My evolution as a frontend developer, building innovative solutions
            and mastering cutting-edge technologies across multiple platforms
            and industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-glass-gradient backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-px"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="p-8 bg-glass-gradient backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Briefcase className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex items-start gap-3"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-3 md:-translate-x-3 border-4 border-gray-900 shadow-lg shadow-blue-500/50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
