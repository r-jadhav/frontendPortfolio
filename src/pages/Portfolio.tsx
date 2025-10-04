import { useState, useRef } from "react";
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Calendar,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Header from "@/components/Header";

const projectsData = [
  {
    id: 1,
    title: "pms-dashboard",
    description: "",
    tags: ["React Js", "Node js", "cron", "axios", "datatables", "moment"],
    category: "web",
    githubLink: "#",
    liveLink: "",
    date: "2025-06-15",
    image: "pms-dashboard.jpg",
  },
   {
    id: 1,
    title: "Tulip and the Rose",
    tags: ["React Js", "Node Js","axios"],
    category: "web",
    githubLink: "#",
    liveLink: "https://www.tulipandtherose.com/",
    date: "2025-01-21",
    image: "tulip-rose.jpg",
  },
  {
    id: 1,
    title: "Brahma Gems",
    description:
      "Built the Brahma Gems platform for Anshul Goel to help users find the right gemstone or Rudraksha based on their kundli. Delivered a clean, informative, and responsive interface to support guided, astrology-based purchases.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://brahmagems.com/",
    date: "2025-06-15",
    image: "brahmagems.jpg",
  },
  {
    id: 2,
    title: "kaizen Training Solutions (KTS)",
    description:
      "Worked on the Kaizen Training Solutions website, a platform offering a wide range of corporate coaching and training programs tailored to leadership, sales, wellness, and more. Focused on creating a clean, responsive interface to help users easily explore and select the right training solutions.",
    tags: ["PHP", "JavaScript", "HTML5", "CSS3", "Bootstrap5"],
    category: "web",
    githubLink: "#",
    liveLink: "https://kaizentrainingsolutions.com/",
    date: "2025-06-15",
    image: "kaizen-training-solutions.jpg",
  },
  {
    id: 3,
    title: "Prima Kniha",
    description:
      "Enhanced the frontend of Prima Kniha, optimizing responsiveness and multilingual support for an international audience. Ensured smooth product discovery and secure checkout in multiple currencies.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://primakniha.kartlog.in/",
    date: "2023-09-01",
    image: "primakniha.jpg",
  },
  {
    id: 4,
    title: "Cancer Consult India",
    description:
      "Designed and developed the Cancer Consult India website for Dr. Manish Kumar Singhal, a leading cancer specialist in Noida. Focused on presenting cancer-related information in a clean, accessible, and patient-friendly format.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://cancerconsultindia.com/",
    date: "2023-07-10",
    image: "cancer-consult.jpg",
  },
  {
    id: 5,
    title: "Geeken",
    description:
      "Developed the frontend for Geeken, enabling users to explore tailored furniture solutions—from office seating to hospital beds—across sectors like education, healthcare, and corporate. Prioritized intuitive layout and visual clarity to reinforce brand credibility.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://geeken.in/",
    date: "2025-05-20",
    image: "geeken.jpg",
  },
  {
    id: 6,
    title: "Charbhuja",
    description:
      "Charbhuja Marble & Tile website to showcase their exquisite collection of imported Italian marble, onyx, and exotic natural stones. The site highlights clear product categories, making it easy for users to explore white marble, travertine, and more. ",
    tags: ["Wordpress", "MySql"],
    category: "web",
    githubLink: "#",
    liveLink: "https://charbhuja.biz/",
    date: "2023-03-15",
    image: "charbhuja.jpg",
  },
  {
    id: 7,
    title: "Infinix",
    description:
      "The Infinix India website to showcase a diverse range of smartphones, TVs, laptops, and TWS products. Focused on creating a clean, navigable interface that helps users explore cutting-edge tech seamlessly. ",
    tags: ["Shopify"],
    category: "web",
    githubLink: "#",
    liveLink: "https://www.infinixmobiles.in/",
    date: "2025-03-15",
    image: "infinix.jpg",
  },
  {
    id: 8,
    title: "Uboard India",
    description:
      "Developed responsive, high-clarity product pages for Uboard India’s premium micromobility range—Evo, X7, Discovery, and Spacebike—highlighting key specs, safety certifications, and foldable portability.",
    tags: ["Shopify"],
    category: "web",
    githubLink: "#",
    liveLink: "https://uboardindia.com/",
    date: "2025-04-20",
    image: "uboard.jpg",
  },
  {
    id: 9,
    title: "Sugar and Spice",
    description:
      "Designed a customer-friendly interface for Sugar & Spice, showcasing their range of celebration cakes, gluten-free options, and corporate gift hampers. Emphasized responsive navigation and clear presentation to enhance memorable ordering experiences.",
    tags: ["Shopify"],
    category: "web",
    githubLink: "#",
    liveLink: "https://www.thesugarandspice.com/",
    date: "2025-01-30",
    image: "sugar-spice.jpg",
  },
  {
    id: 10,
    title: "Joon Blu",
    description:
      "Designed and developed the JoonBlu Shopify store to showcase their collection of tote bags, laptop bags, and mini bags. Focused on clean visuals, seamless shopping experience, and brand storytelling.",
    tags: ["Shopify"],
    category: "web",
    githubLink: "#",
    liveLink: "https://joonblu.com/",
    date: "2025-05-01",
    image: "joonblu.jpg",
  },
  {
    id: 11,
    title: "Liqvid",
    description:
      "Created a dual‑purpose platform for Liqvid, showcasing both its AI‑enhanced English learning applications and cloud‑based digital signage solution. Focused on clean UI and responsive layouts to clearly communicate personalized learning paths and multimedia engagement.",
    tags: ["Wordpress"],
    category: "web",
    githubLink: "#",
    liveLink: "https://liqvid.com/",
    date: "2025-03-15",
    image: "liqvid.jpg",
  },
  {
    id: 12,
    title: "The In Vogue Life",
    description:
      "The In Vogue Life website—an e-magazine platform featuring diverse stories in travel, food, tech, design, and lifestyle. Prioritized clean, editorial-style layout and intuitive navigation to bring global narratives to life. ",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://theinvoguelife.com/",
    date: "2025-05-20",
    image: "invogue.jpg",
  },
  {
    id: 13,
    title: "Ramita Kaur",
    description:
      "Built a clean and responsive platform for Dr. Ramita Kaur, a certified maternal, child, and holistic nutritionist with over a decade of clinical experience. Focused on clear presentation of her Mitahar nutrition plans, client transformations, and easy consultation booking.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://ramitakaur.com/",
    date: "2025-04-18",
    image: "ramita-kaur.jpg",
  },
  {
    id: 14,
    title: "Alpha Legal Consultants",
    description:
      "Built a dynamic website for Alpha Legal Consultants to represent their strong legal heritage and multi-city presence. Emphasized clean design, accessibility, and detailed service listings across various practice areas.",
    tags: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap5",
    ],
    category: "web",
    githubLink: "#",
    liveLink: "https://alcadvocates.com/",
    date: "2025-02-15",
    image: "alpha.jpg",
  },
  {
    id: 15,
    title: "Hr Elite App",
    description:
      "This app is for managing leave and attendance by employees. they can punch their attendance, check their salary based on the month and year, and take a leave of absence from this app. This app has a login feature that allows a specific employee to access their account.",
    tags: ["React Native", "Node js", "MySql"],
    category: "mobile",
    githubLink: "#",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.HRElite&hl=en_IN",
    date: "2024-13-01",
    image: "hrElite.jpg",
  },
  {
    id: 16,
    title: "Smart Serve",
    description:
      "Smart Serve app is app where employee can punch their attendance as a day attendance and night attendance. also they can see their details on detail screen.",
    tags: ["React Native", "Node js", "MySql"],
    category: "mobile",
    githubLink: "#",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.utssmartcon&hl=en_IN",
    date: "2024-13-01",
    image: "smart-serve.jpg",
  },
  {
    id: 17,
    title: "Abu Dhabi Mawlid Committee (ADMC)",
    description:
      "'Abu Dhabi Mawlid Committee' app now and immerse yourself in the Abu Dhabi Tamil Islamic Society.",
    tags: ["React Native", "Node js", "MySql"],
    category: "mobile",
    githubLink: "#",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.utssmartcon&hl=en_IN",
    date: "2024-13-01",
    image: "admc.jpg",
  },
  {
    id: 18,
    title: "Pyramid",
    description:
      "This is the project management app for the employee, who can describe their work and attach images regarding the projects.",
    tags: ["React Native", "Node js", "MySql"],
    category: "mobile",
    githubLink: "#",
    liveLink: "https://play.google.com/store/apps/details?id=com.utssmartserve",
    date: "2024-13-01",
    image: "pyramid.jpg",
  },
  {
    id: 19,
    title: "Fig Restoration",
    description: "",
    tags: ["Wordpress"],
    category: "web",
    githubLink: "#",
    liveLink: "https://figrestoration.com/",
    date: "2024-13-01",
    image: "figres.jpg",
  },
  {
    id: 20,
    title: "Blair Wellness Group",
    description: "",
    tags: ["Wordpress"],
    category: "web",
    githubLink: "#",
    liveLink: "https://blairwellnessgroup.com/",
    date: "2024-13-01",
    image: "blair-wellness.jpg",
  },
  {
    id: 21,
    title: "Star Classent",
    description: "",
    tags: ["Wordpress"],
    category: "web",
    githubLink: "#",
    liveLink: "https://starclassent.com/",
    date: "2024-13-01",
    image: "se.jpg",
  },
  {
    id: 22,
    title: "And So She Thinks",
    description: "",
    tags: ["Wordpress"],
    category: "web",
    githubLink: "#",
    liveLink: "https://andsoshethinks.co.uk/",
    date: "2024-13-01",
    image: "andsoshe.jpg",
  },
];
const TagButton = ({
  tag,
  onTagClick,
  isActive,
}: {
  tag: string;
  onTagClick: (tag: string) => void;
  isActive: boolean;
}) => (
  <Button
    variant={isActive ? "default" : "outline"}
    onClick={() => onTagClick(tag)}
    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "hover:bg-gray-700 hover:text-gray-50"
    }`}
  >
    {tag}
  </Button>
);

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        {project.liveLink && (
          <Button variant="ghost" size="icon" asChild>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink
                size={20}
                className="hover:text-gray-300 transition-colors duration-200"
              />
            </a>
          </Button>
        )}
      </div>

      <p className="text-gray-400 text-base mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* <div className="flex justify-between items-center">
        <div className="text-gray-500 text-sm">
          <Calendar size={14} className="inline-block mr-1" />
          {new Date(project.date).toLocaleDateString()}
        </div>
        <div className="flex gap-2">
          {project.githubLink && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={20}
                  className="hover:text-gray-300 transition-colors duration-200"
                />
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={20}
                  className="hover:text-gray-300 transition-colors duration-200"
                />
              </a>
            </Button>
          )}
        </div>
      </div> */}
    </div>
  </div>
);

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const projectsRef = useRef<HTMLElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setActiveCategory("all");
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Scroll to projects section when category changes
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch =
      selectedTags.length === 0 ||
      project.tags.some((tag) => selectedTags.includes(tag));
    const categoryMatch =
      activeCategory === "all" || project.category === activeCategory;
    return searchMatch && tagMatch && categoryMatch;
  });

  const allTags = [...new Set(projectsData.flatMap((project) => project.tags))];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            A curated collection of my best work, showcasing my skills and
            experience in web development.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 flex-grow">
              <Search size={20} className="text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-grow bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
              />
            </div>
            <Button
              variant="secondary"
              className="rounded-full"
              onClick={clearAllFilters}
            >
              <Filter size={20} className="mr-2" />
              Clear Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="mb-6"
          >
            <TabsList className="bg-white/10 border border-white/20">
              <TabsTrigger
                value="all"
                className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                All Projects ({projectsData.length})
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Web ({projectsData.filter((p) => p.category === "web").length})
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Mobile (
                {projectsData.filter((p) => p.category === "mobile").length})
              </TabsTrigger>
              <TabsTrigger
                value="dashboard"
                className="text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Dashboard (
                {projectsData.filter((p) => p.category === "dashboard").length})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag) => (
              <TagButton
                key={tag}
                tag={tag}
                onTagClick={toggleTag}
                isActive={selectedTags.includes(tag)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section ref={projectsRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {activeCategory === "all"
                ? "All Projects"
                : `${
                    activeCategory.charAt(0).toUpperCase() +
                    activeCategory.slice(1)
                  } Projects`}
            </h2>
            <div className="text-gray-400">
              Showing {filteredProjects.length} of {projectsData.length}{" "}
              projects
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No projects found
              </div>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frontend Developer
              </h3>
              {/* <p className="text-gray-400">
                Crafting exceptional digital experiences
              </p> */}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Renuka Jadhav. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
