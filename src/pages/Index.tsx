
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { Download, ExternalLink, Github, ArrowRight } from "lucide-react";

const Index = () => {
  const [repos, setRepos] = useState(100);
  const [clients, setClients] = useState(10);
  const [answers, setAnswers] = useState(500);

  // Animate numbers on load
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, setValue: (value: number) => void) => {
      let startTime: number | null = null;
      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      animateValue(0, 100, 2000, setRepos);
      animateValue(0, 10, 2000, setClients);
      animateValue(0, 500, 2000, setAnswers);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const techStack = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "Docker", "Git", "TailwindCSS"
  ];

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business metrics",
      tech: ["React", "Python", "Firebase", "Docker"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Aryan</span> 👋
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
                  Full Stack Developer who builds performant and scalable web apps.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  3+ years of experience crafting digital experiences that matter.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=face"
                      alt="Aryan Mehta"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 flex flex-col justify-center h-full">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer based in Bengaluru, India, with over 3 years of experience 
                in building modern web applications. I specialize in creating performant, scalable, and 
                user-friendly solutions using cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My philosophy centers around clean code, exceptional user experiences, and continuous learning. 
                I believe that great software should be both powerful and intuitive, solving real problems 
                while providing joy to users.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me writing technical blogs, contributing to open source, 
                or exploring the latest trends in web development.
              </p>
            </div>
            
            <div className="space-y-6 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Tech Stack</h3>
              <TechStack technologies={techStack} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {repos}+
                </div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">GitHub Repositories</p>
                <p className="text-gray-600 dark:text-gray-400">Open source contributions and personal projects</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {clients}+
                </div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Freelance Clients</p>
                <p className="text-gray-600 dark:text-gray-400">Successful projects delivered worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {answers}+
                </div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Stack Overflow Answers</p>
                <p className="text-gray-600 dark:text-gray-400">Helping the developer community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Some of my latest work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  <TechStack technologies={project.tech} />
                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
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
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
