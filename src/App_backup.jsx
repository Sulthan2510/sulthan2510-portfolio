import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import profileImage from './images/profile.png';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      architecture: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and user authentication.",
      tech: ["React", "WebSocket", "Flask", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      architecture: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive dashboard for data visualization with real-time updates and custom reports.",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      architecture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Muhammed Sulthan Durapsha Haja
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'resume', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === tab
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4">
            {['about', 'resume', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 capitalize hover:bg-slate-700 transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* About Me Tab */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sulthan MD</span>
                </h1>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  Senior Data Engineer with 6+ years of experience, now pursuing an 
                  M.Sc. in Renewable Energy and Data Engineering at Hochschule Offenburg. 
                  I build data platforms and ETL/ELT pipelines using Python, PySpark, Spark-SQL, 
                  Azure Synapse Analytics, Azure Databricks (Delta Lake, Unity Catalog, 
                  Jobs/Workflows scheduler), Spark Streaming (Kafka), ADLS Gen2 and 
                  relational databases (PostgreSQL, MySQL). Backed by a B.E. from 
                  CEG Anna University and experience at LTIMindtree, I focus on applying 
                  data engineering to large-scale analytics and sustainable energy systems.
                </p>
                <p className="text-lg text-slate-400 mb-8">
                  IoT data pipeline at Hochschule Offenburg using Node‑RED, NATS JetStream, 
                  InfluxDB and Grafana for real‑time monitoring and end‑to‑end analytics, 
                  containerized with Docker and now being integrated with GitLab CI/CD for automated deployments.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/files/sulthan_cv.pdf"
                    download="sulthan_cv.pdf"
                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors inline-block text-white text-center"
                  >
                    Download CV
                  </a>
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                  <img
                    /* src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"*/
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Projects Completed", value: "25+" },
                { label: "Happy Clients", value: "4+" },
                { label: "Years Experience", value: "6+" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-colors">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resume Tab */}
        {activeTab === 'resume' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">My Resume</h2>

            {/* Experience */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">Experience</h3>
              {[
                {
                  role: "Senior Full-Stack Developer",
                  company: "Tech Innovations Inc.",
                  period: "2022 - Present",
                  description: "Led development of microservices architecture for 50k+ users, improved performance by 40%"
                },
                {
                  role: "Full-Stack Developer",
                  company: "Digital Solutions Ltd.",
                  period: "2020 - 2022",
                  description: "Developed and maintained 10+ web applications using React and Node.js"
                },
                {
                  role: "Junior Developer",
                  company: "StartUp Hub",
                  period: "2019 - 2020",
                  description: "Built responsive web interfaces and implemented backend APIs"
                }
              ].map((job, idx) => (
                <div key={idx} className="mb-8 pb-8 border-b border-slate-700 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{job.role}</h4>
                    <span className="text-slate-400 text-sm">{job.period}</span>
                  </div>
                  <p className="text-cyan-400 mb-2">{job.company}</p>
                  <p className="text-slate-300">{job.description}</p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { category: "Frontend", skills: "React, Vue.js, TypeScript, Tailwind CSS, Next.js" },
                  { category: "Backend", skills: "Node.js, Python, PostgreSQL, MongoDB, Express" },
                  { category: "DevOps", skills: "Docker, AWS, GitHub Actions, CI/CD" },
                  { category: "Tools", skills: "Git, Webpack, REST APIs, GraphQL" }
                ].map((skillGroup, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors">
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">{skillGroup.category}</h4>
                    <p className="text-slate-300">{skillGroup.skills}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">Education</h3>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-2">Bachelor of Technology in Computer Science</h4>
                <p className="text-cyan-400 mb-2">University of Technology</p>
                <p className="text-slate-400">Graduated: 2019</p>
              </div>
            </section>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded font-semibold transition-colors">
                      View Project →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Section */}
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">Project Architectures</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={`arch-${project.id}`} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.architecture}
                      alt={`${project.title} Architecture`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-slate-400 text-sm mb-4">Architecture diagram and tech stack overview</p>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2">
                      <ExternalLink size={18} /> View Full Architecture
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-slate-300 mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { icon: Mail, label: "Email", value: "sulthan2510@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn", value: "sulthan2510" },
                    { icon: Github, label: "GitHub", value: "sulthan2510" }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <contact.icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        <p className="text-lg font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400 flex items-center justify-center transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400 flex items-center justify-center transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400 flex items-center justify-center transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-24 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
          <p>© 2026 Sulthan. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}