
import { Users, FileText, Calendar, Trophy, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      role: 'Secretary & Web Team Member',
      organization: 'Coding Club @ MBU',
      period: '2024 – present',
      description: 'Leading both the Design and Web Teams of the university coding club. Responsible for creating visual content, managing the club website, and organizing design/web activities.',
      achievements: [
        'Created visual content for 10+ technical events',
        'Managed and enhanced the club\'s website and UI',
        'Improved the club\'s branding and design consistency',
        'Coordinated workshops on design tools and frontend technologies'
      ],
      tags: ['Leadership', 'Design', 'Web Development', 'Team Management', 'UI/UX', 'Event Coordination'],
      icon: <Users className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      role: 'Coordinator – Documentation Team',
      organization: 'ISTE Club @ MBU',
      period: '2024 – present',
      description: 'Coordinating documentation efforts for ISTE Club, focusing on technical content, event documentation, and reporting quality.',
      achievements: [
        'Authored and reviewed documentation for 5+ technical events',
        'Standardized templates for event reports and project summaries',
        'Collaborated with tech and design teams for content accuracy',
        'Trained new members on effective documentation tools and formats'
      ],
      tags: ['Documentation', 'Leadership', 'Technical Writing', 'Teamwork', 'Event Coordination'],
      icon: <FileText className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const hackathons = [
    {
      title: 'NHETIS\'25',
      organization: 'GRIET College, Hyderabad',
      achievement: '3rd Prize Winner – ₹10,000 + AWS Award',
      period: '2025',
      description: 'Selected among the top 60 teams from 250+ teams in Round 1. Developed an Emergency Funding Platform. Awarded ₹10,000 cash prize and a special AWS consolation award.',
      category: 'Competition',
      icon: <Trophy className="h-5 w-5" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Code Rush 2K25',
      organization: 'CSE Department, Mohan Babu University',
      achievement: 'Event Organizer',
      period: '2025',
      description: 'Successfully organized and managed a college-level hackathon with 400+ participants from the department. Managed all event activities, including challenges, registrations, judging, and prizes.',
      category: 'Leadership',
      icon: <Award className="h-5 w-5" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Synapse Hackathon',
      organization: 'Mohan Babu University',
      achievement: 'Team Lead',
      period: '2025',
      description: 'Led a team in the Synapse Hackathon, coordinating end-to-end project development under tight deadlines. Managed brainstorming, task allocation, technical planning, prototype building, and the final presentation.',
      category: 'Leadership',
      icon: <Award className="h-5 w-5" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Daksh AI Hackathon',
      organization: 'SASTRA University',
      achievement: 'Top 5 Finalist',
      period: '2024',
      description: 'Secured position in top 5 teams out of 200+ participants in AI/ML focused hackathon.',
      category: 'Competition',
      icon: <Trophy className="h-5 w-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'X-HORIZON Hackathon',
      organization: 'Technical University',
      achievement: 'Event Coordinator',
      period: '2025',
      description: 'Successfully coordinated and managed technical event with 500+ participants.',
      category: 'Leadership',
      icon: <Award className="h-5 w-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'IITTNIF Ideathon',
      organization: 'IIT Tirupati',
      achievement: 'Top 100 Qualifier',
      period: '2025',
      description: 'Recognized for the idea "Friendly Borewell Water Detection Device" addressing rural water challenges with low-cost sensor technology.',
      category: 'Competition',
      icon: <Trophy className="h-5 w-5" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">🧩 Experience and Leadership</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My leadership roles and technical contributions that have shaped my professional growth
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-background z-10 mt-6"></div>
                
                {/* Experience Card */}
                <div className="ml-16 w-full">
                  <Card className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                    {/* Header with Icon and Role */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center text-white mt-1`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">👤 {exp.role}</h3>
                        <p className="text-blue-400 font-medium mb-1">{exp.organization}</p>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          📅 {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-white mb-3">Key Achievements:</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-medium text-white mb-3">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="bg-transparent border border-gray-300 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Quote */}
          <div className="mt-16 text-center">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl rounded-lg"></div>
              <div className="relative glass-effect rounded-lg p-8 backdrop-blur-sm">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-relaxed">
                  "Transforming passion into action — through code, leadership, and innovation."
                </div>
                <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathons & Competitions Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">🏆 Hackathons & Competitions</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Competitive achievements and leadership roles in technical events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <Card 
                key={hackathon.title}
                className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${hackathon.color} flex items-center justify-center text-white`}>
                      {hackathon.icon}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-${hackathon.category === 'Competition' ? 'yellow' : 'green'}-500/30 text-${hackathon.category === 'Competition' ? 'yellow' : 'green'}-300`}
                    >
                      {hackathon.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">{hackathon.title}</h4>
                    <p className="text-blue-400 font-medium">{hackathon.organization}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-medium">{hackathon.achievement}</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {hackathon.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{hackathon.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
