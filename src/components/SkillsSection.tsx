import {
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  Database,
  GitBranch,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Play Store"],
      color: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/25",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      skills: ["Shopify", "WooCommerce", "Payment Integration", "Store Setup"],
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25",
    },
    {
      icon: Palette,
      title: "CMS & Design",
      skills: ["WordPress", "Shopify", "Wix", "Responsive Design"],
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "MySql", "PostgreSQL", "REST APIs"],
      color: "from-indigo-500 to-blue-500",
      glowColor: "shadow-indigo-500/25",
    },
    {
      icon: GitBranch,
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Vercel", "Figma"],
      color: "from-gray-500 to-slate-600",
      glowColor: "shadow-gray-500/25",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With a solid foundation in front-end technologies like React.js,
            JavaScript, HTML, and CSS, I create seamless and engaging digital
            experiences. I also have hands-on experience in building mobile apps
            using React Native and developing websites on platforms like Shopify
            and WordPress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`group p-8 bg-glass-gradient backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-slide-in-left hover:shadow-2xl ${category.glowColor}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <category.icon
                  size={40}
                  className="text-white drop-shadow-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 text-gray-200 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default border border-white/5 hover:border-white/20"
                    style={{
                      animationDelay: `${index * 0.15 + skillIndex * 0.05}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
