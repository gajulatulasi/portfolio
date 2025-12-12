
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Download, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
  status: string;
  timeline: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-slate-900/95 border-slate-700 text-white">
          {/* Header */}
          <div className="relative p-6 border-b border-slate-700">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="pr-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                  {project.category}
                </Badge>
                <Badge 
                  variant={project.status === 'Completed' ? 'default' : 'secondary'}
                  className={project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                >
                  {project.status}
                </Badge>
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.timeline}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project Image */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Problem Solved */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Problem Solved</h3>
              <p className="text-gray-300 leading-relaxed">
                This project addresses the need for a modern, user-friendly platform that provides 
                seamless functionality and excellent user experience. It demonstrates proficiency 
                in full-stack development and modern web technologies.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="text-gray-300">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open(project.live, '_blank')}
                disabled={project.live === '#'}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
                onClick={() => window.open(project.github, '_blank')}
                disabled={project.github === '#'}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Case Study PDF
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
