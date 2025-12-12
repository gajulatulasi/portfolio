import { Calendar, ExternalLink, BookOpen, Trophy, Award, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CertificationsProps {
  showAll?: boolean;
}

const Certifications = ({ showAll: initialShowAll = false }: CertificationsProps) => {
  const [showAll, setShowAll] = useState(initialShowAll);
  const navigate = useNavigate();
  const certifications = [
    {
      title: 'NPTEL Certificate - DBMS',
      issuer: 'IIT Kharagpur',
      date: 'Jan–Mar 2025',
      duration: '8 Weeks',
      description: 'Gained strong foundation in SQL, relational models, and backend technologies.',
      certifiedCandidates: '8423+',
      skills: ['SQL', 'Database Management', 'Relational Models', 'Backend Technologies'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Java Bootcamp',
      issuer: 'LetsUpgrade',
      date: '16 Jan 2025',
      description: 'Successfully completed an intensive Java Bootcamp conducted by LetsUpgrade, in collaboration with NSDC, ITM Edutech, and GDG MAD. Covered Java fundamentals, OOPs, and real-world applications.',
      skills: ['Core Java', 'OOPs Concepts', 'File Handling', 'Exception Handling', 'Real-World Application Development'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      title: 'AI & Prompt Engineering Certification',
      issuer: 'Infosys Springboard',
      date: '6-8 Jan 2025',
      description: 'Successfully completed two AI-focused courses: Prompt Engineering (Jan 8) and Introduction to OpenAI GPT Models (Jan 6). Gained insights into GPT architecture, prompt optimization, and responsible AI usage.',
      skills: ['Prompt Engineering', 'OpenAI GPT Models', 'AI Applications', 'Responsible AI', 'AI Architecture'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Git & GitHub Bootcamp',
      issuer: 'LetsUpgrade',
      date: '2024',
      duration: '3 Days',
      description: 'Learned version control, Git commands, GitHub collaboration, and DevOps best practices. Ready to streamline development workflows in real-world projects.',
      skills: ['Git', 'GitHub', 'Version Control', 'DevOps', 'Collaboration'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'DevTown',
      date: '2025',
      description: 'Strengthened core programming and algorithmic problem-solving skills. Built a solid base for interviews and backend development.',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Programming'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'OCI Generative AI Certification',
      issuer: 'Oracle',
      date: '2025',
      description: 'Certificate ID: OCIGAI-2025-73671665. Successfully completed the OCI Generative AI course. Gained hands-on experience in building and deploying AI models on cloud, understanding AI workflows, and applying secure, scalable AI solutions.',
      skills: ['Cloud Computing', 'Generative AI', 'AI Model Deployment', 'Problem-Solving with AI'],
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-purple-500 to-blue-500',
      featured: true
    },
    {
      title: 'The Code Clash',
      issuer: 'Mohan Babu University',
      date: '2024',
      description: 'Participated in a competitive coding event. Gained practical exposure to real-time problem-solving and algorithms. Motivated to engage in more hackathons and coding events.',
      skills: ['Competitive Programming', 'Problem Solving', 'Algorithms'],
      icon: <Trophy className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold gradient-text">Certificates & Achievements</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Technical certifications and achievements that validate my skills and commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? certifications : certifications.filter(cert => cert.featured)).map((cert, index) => (
            <Card 
              key={cert.title}
              className={`certificate-card p-0 overflow-hidden animate-fade-in-up h-full flex flex-col ${cert.featured ? 'ring-2 ring-primary/50' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6 space-y-4 relative flex flex-col flex-1">
                {cert.featured && (
                  <div className="absolute top-4 right-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                )}

                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <Badge 
                    variant="default"
                    className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 font-medium"
                  >
                    ✅ Completed
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 leading-tight line-clamp-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center text-primary font-semibold text-sm mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cert.color} mr-2`}></div>
                      {cert.issuer}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                    </div>
                    {cert.duration && (
                      <div className="text-muted-foreground text-sm flex items-center mt-1">
                        ⏱️ Duration: {cert.duration}
                      </div>
                    )}
                    {cert.certifiedCandidates && (
                      <div className="text-muted-foreground text-sm flex items-center mt-1">
                        👥 Certified: {cert.certifiedCandidates}
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="mt-auto">
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color} mr-2`}></div>
                      Skills Covered
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20 font-medium"
                        >
                          +{cert.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-border/30 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full border-2 bg-gradient-to-r ${cert.color} border-transparent text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {!initialShowAll && !showAll && certifications.filter(cert => !cert.featured).length > 0 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/certifications')}
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"
            >
              <Award className="w-5 h-5 mr-2" />
              View All Certifications ({certifications.length})
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
