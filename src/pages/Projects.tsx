
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including user authentication, payment processing, inventory management, and admin dashboard. Built with modern React patterns and optimized for performance.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Features include drag-and-drop kanban boards, time tracking, and reporting.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Socket.io"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business metrics with interactive charts, custom reports, and data export capabilities. Handles large datasets with optimized performance.",
      tech: ["React", "Python", "Firebase", "Docker", "D3.js"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Frontend",
      year: "2023"
    },
    {
      title: "Social Media API",
      description: "RESTful API for a social media platform with user management, post creation, real-time notifications, and content moderation. Includes comprehensive documentation and testing.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Backend",
      year: "2023"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features responsive design and progressive web app capabilities.",
      tech: ["React", "TypeScript", "TailwindCSS", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Frontend",
      year: "2023"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices architecture with Docker containerization, API gateway, service discovery, and monitoring. Demonstrates best practices for distributed systems.",
      tech: ["Docker", "Node.js", "PostgreSQL", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      demo: "#",
      github: "#",
      category: "Backend",
      year: "2024"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const years = ["All", "2024", "2023"];

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === "All") return true;
    return project.category === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from simple websites to complex web applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={selectedFilter === category ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <TechStack technologies={project.tech} />
                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
