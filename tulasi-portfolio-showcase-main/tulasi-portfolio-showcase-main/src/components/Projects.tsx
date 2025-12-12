import { useState } from 'react';
import { Github, ExternalLink, Eye, FolderGit2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Tulynx - Perfume Shop',
      description: 'A sophisticated e-commerce platform for luxury perfumes and fragrances. Features a beautiful product catalog, shopping cart functionality, user authentication, and order management system.',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Order Management', 'Payment Integration', 'Admin Dashboard'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop',
      status: 'Completed',
      timeline: '3.5 months'
    },
    {
      title: 'CraftSense',
      description: 'A comprehensive e-commerce platform empowering artisans to showcase and sell their handcrafted products globally. Features secure authentication, product management, and dashboard analytics.',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      features: ['User Authentication', 'Product Listing', 'Secure Dashboard', 'Payment Integration'],
      github: 'https://github.com/gajulatulasi/craftsense',
      live: '#',
      image: '/lovable-uploads/a7fe63fd-a985-45af-860a-73d8e1192546.png',
      status: 'Completed',
      timeline: '3 months'
    },
    {
      title: 'EndoSense Health Tracker',
      description: 'Advanced health monitoring application that tracks user mood, stress levels, and wellness metrics with real-time analytics and interactive visualizations.',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
      features: ['Real-time Analytics', 'Mood Tracking', 'Stress Monitoring', 'Data Visualization'],
      github: 'https://github.com/gajulatulasi/endosense',
      live: '#',
      image: '/lovable-uploads/d9c67c5a-a1ec-4c2c-b58d-435ed85a8f3f.png',
      status: 'Completed',
      timeline: '2.5 months'
    },
    {
      title: 'Chibunova Campus CMS',
      description: 'Comprehensive campus management system designed for educational institutions. Features role-based access control, student enrollment, exam management, and faculty coordination.',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
      features: ['Role-based Access', 'Student Management', 'Exam System', 'Faculty Portal'],
      github: 'https://github.com/gajulatulasi/chibunova-campus',
      live: '#',
      image: '/lovable-uploads/528bd79d-9c7b-4442-8810-a27a60160ba2.png',
      status: 'Completed',
      timeline: '4 months'
    },
    {
      title: 'Samartha Sethu',
      description: 'A real-time food donation and sustainability platform that connects donors with receivers to reduce food waste. Features live map listings, instant claiming, fallback routing to animal farms/compost centers, role-based dashboards, disaster-relief mode, gamification, and an analytics-driven admin panel.',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Socket.io'],
      features: ['Live Map Listings', 'Instant Claiming', 'Role-based Dashboards', 'Disaster-Relief Mode', 'Gamification', 'Analytics Admin Panel'],
      github: 'https://github.com/gajulatulasi/samarthasethu',
      live: 'https://samartha-setu.vercel.app/',
      image: '/lovable-uploads/samartha-setu-logo.png',
      status: 'Completed',
      timeline: '2 months'
    },
    {
      title: 'Responsive Calculator',
      description: 'Modern, feature-rich calculator application with dark/light theme toggle, responsive design, and smooth animations. Built with vanilla JavaScript for optimal performance.',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      features: ['Theme Toggle', 'Responsive Layout', 'Smooth Animations', 'Keyboard Support'],
      github: 'https://github.com/gajulatulasi/responsive-calculator',
      live: '#',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      status: 'Completed',
      timeline: '2 weeks'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of my development journey, featuring full-stack applications 
              and frontend projects that demonstrate my technical skills and creativity.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-transparent border border-gray-300 text-gray-400 hover:text-white hover:border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-300">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge 
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      disabled={project.github === '#'}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-green-500/30 hover:bg-green-500/10 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.live, '_blank');
                      }}
                      disabled={project.live === '#'}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://github.com/gajulatulasi', '_blank')}
            >
              <FolderGit2 className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Projects;
