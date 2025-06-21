import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "renukajadhav2211@gmail.com",
      href: "mailto:renukajadhav2211@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 798 796 4544",
      href: "tel:7987964544",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, India",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/r-jadhav",
      color: "hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/renuka-jadhav-492bb3244",
      color: "hover:bg-blue-600",
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: "https://twitter.com/yourusername",
    //   color: "hover:bg-blue-400",
    // },
    // {
    //   icon: MessageCircle,
    //   label: "Discord",
    //   href: "#",
    //   color: "hover:bg-indigo-600",
    // },
  ];

  return (
    <section
      className="py-24 bg-hero-gradient text-white relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? I'm available for
            exciting projects, collaborations, and full-time opportunities that
            push the boundaries of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Get In Touch
              </h3>
              <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                I'm passionate about creating exceptional digital experiences.
                Whether you need a cutting-edge website, innovative mobile app,
                or robust e-commerce solution, let's discuss how I can bring
                your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-6 p-6 bg-glass-gradient backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium">
                      {item.label}
                    </p>
                    <p className="font-semibold text-lg text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold mb-6 text-white">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-glass-gradient backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-white/30`}
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-glass-gradient backdrop-blur-sm border border-white/10 animate-fade-in hover:border-white/20 transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-gray-300">
                I'll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 backdrop-blur-sm transition-all duration-300"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 backdrop-blur-sm transition-all duration-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="info@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-white">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 text-white placeholder-gray-300 resize-none backdrop-blur-sm transition-all duration-300"
                  placeholder="Tell me about your project vision..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send size={20} className="mr-3" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
