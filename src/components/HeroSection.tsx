import { Code, Smartphone, Globe, Palette, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 bg-hero-gradient flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-[15%] w-1 h-1 bg-blue-400/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-[20%] w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 left-[70%] w-1 h-1 bg-pink-400/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-[25%] w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute top-20 right-20 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      {/* Large decorative circle */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full backdrop-blur-3xl border border-white/5"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hey, I'm a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Web Developer
                </span>{" "}
              </h1>

              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Need a fast, responsive, and user-friendly website or app? I
                  specialize in front-end development using React.js, React
                  Native, and JavaScript, and also work with platforms like
                  Shopify and WordPress to bring complete web solutions to life.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mb-8">
              <ContactDialog>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                  Get Started - Let's Talk!
                </Button>
              </ContactDialog>
            </div>

            {/* Newsletter CTA */}
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="text-2xl">🎉</span>
              <span>
                Ready to bring your ideas to life? Let's create something
                amazing together!
              </span>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex items-center gap-3 bg-glass-gradient backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 animate-slide-in-left hover:scale-105 transition-all duration-300">
                <Globe size={20} className="text-blue-400" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div
                className="flex items-center gap-3 bg-glass-gradient backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 animate-slide-in-left hover:scale-105 transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <Smartphone size={20} className="text-green-400" />
                <span className="text-sm font-medium">Mobile Apps</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Area */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Profile placeholder with glassmorphism effect */}
              <div className="relative w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/10 animate-glow"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <Code size={120} className="text-white/80 drop-shadow-lg" />
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 bg-glass-gradient backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">
                    5+ Years
                  </span>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-glass-gradient backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -left-12 bg-glass-gradient backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  <span className="text-white text-sm">Live Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/5 rounded-2xl animate-float backdrop-blur-sm border border-white/10"></div>
      <div
        className="absolute top-40 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-float backdrop-blur-sm border border-blue-400/20"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-16 h-16 bg-purple-500/10 rounded-2xl animate-float backdrop-blur-sm border border-purple-400/20"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-10 w-12 h-12 bg-pink-500/10 rounded-full animate-float backdrop-blur-sm border border-pink-400/20"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
