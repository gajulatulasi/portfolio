
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "9.52 CGPA in B.Tech CSE"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Problem Solver",
      description: "DSA & Java expertise"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership",
      description: "Club coordinator & team lead"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Multiple certifications"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Mohan Babu University",
      period: "2023 - 2027",
      grade: "CGPA: 9.52",
      status: "current"
    },
    {
      degree: "Intermediate (12th)",
      institution: "Akshara Sree Junior College",
      period: "2021 - 2023",
      grade: "95.6%",
      status: "completed"
    },
    {
      degree: "SSC (10th)",
      institution: "Kiddy's English Medium High School",
      period: "2020 - 2021",
      grade: "99%",
      status: "completed"
    }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate full-stack developer with a strong foundation in computer science and 
            a drive for creating innovative web solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Description */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                 I'm a dedicated Computer Science student at Mohan Babu University, maintaining an impressive 
                 9.52 CGPA while actively building real-world applications. My passion lies in full-stack 
                 development, particularly with the MERN stack.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond coding, I enjoy problem-solving through Data Structures and Algorithms, 
                technical writing, and leading teams. I believe in continuous learning and 
                contributing to the developer community through collaborative projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-400 mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
                  )}
                  
                  <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 ml-8 relative">
                    {/* Timeline dot */}
                    <div className={`absolute -left-14 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      edu.status === 'current' 
                        ? 'bg-blue-500 border-blue-400' 
                        : 'bg-green-500 border-green-400'
                    }`}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          edu.status === 'current' 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{edu.period}</span>
                        <span className="font-semibold text-blue-400">{edu.grade}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
