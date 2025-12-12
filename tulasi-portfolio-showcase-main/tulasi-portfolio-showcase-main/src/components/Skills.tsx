import { Code, Database, Server, Globe, GitBranch, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import SkillModal from './SkillModal';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillsData = {
    "HTML/CSS": {
      name: "HTML/CSS",
      category: "Frontend",
      description: "Proficient in semantic HTML5 and modern CSS3, including Flexbox, Grid, and responsive design principles. Create pixel-perfect, accessible, and mobile-first layouts.",
      proficiency: "Advanced",
      keyPoints: [
        "Semantic HTML5 markup for SEO optimization",
        "Advanced CSS3 animations and transitions",
        "Responsive design with media queries and CSS Grid",
        "CSS preprocessors (SASS/SCSS) experience",
        "Cross-browser compatibility and optimization"
      ],
      projects: ["Tulynx", "CraftSense", "Calculator"],
      color: "from-orange-500 to-red-500"
    },
    "JavaScript": {
      name: "JavaScript",
      category: "Frontend",
      description: "Strong foundation in modern JavaScript (ES6+), including async/await, promises, destructuring, and functional programming concepts. Experience with DOM manipulation and browser APIs.",
      proficiency: "Advanced",
      keyPoints: [
        "ES6+ features and modern JavaScript syntax",
        "Asynchronous programming with Promises and async/await",
        "DOM manipulation and event handling",
        "Functional programming concepts",
        "Browser APIs and local storage"
      ],
      projects: ["All Projects", "Calculator", "Interactive UIs"],
      color: "from-yellow-500 to-orange-500"
    },
    "React.js": {
      name: "React.js",
      category: "Frontend",
      description: "Expert in building dynamic, component-based user interfaces with React. Deep understanding of hooks, context API, state management, and React ecosystem.",
      proficiency: "Advanced",
      keyPoints: [
        "Component lifecycle and React Hooks",
        "State management with Context API and Redux",
        "React Router for navigation",
        "Performance optimization techniques",
        "Custom hooks development"
      ],
      projects: ["Tulynx", "CraftSense", "EndoSense", "Chibunova"],
      color: "from-cyan-500 to-blue-500"
    },
    "Tailwind CSS": {
      name: "Tailwind CSS",
      category: "Frontend",
      description: "Proficient in utility-first CSS framework, creating beautiful and responsive designs efficiently. Expert in customization and theme configuration.",
      proficiency: "Advanced",
      keyPoints: [
        "Utility-first approach for rapid development",
        "Custom theme configuration and design systems",
        "Responsive design with Tailwind breakpoints",
        "Component composition and reusability",
        "Dark mode implementation"
      ],
      projects: ["All Recent Projects", "Portfolio"],
      color: "from-blue-400 to-cyan-400"
    },
    "Node.js": {
      name: "Node.js",
      category: "Backend",
      description: "Skilled in server-side JavaScript development with Node.js. Experience building RESTful APIs, handling authentication, and managing server operations.",
      proficiency: "Intermediate",
      keyPoints: [
        "RESTful API development",
        "Middleware implementation",
        "Authentication and authorization (JWT)",
        "File system operations",
        "Environment variable management"
      ],
      projects: ["Tulynx", "CraftSense", "EndoSense", "Chibunova"],
      color: "from-green-500 to-emerald-500"
    },
    "Express.js": {
      name: "Express.js",
      category: "Backend",
      description: "Experienced in building robust and scalable web applications using Express.js framework. Expert in routing, middleware, and API development.",
      proficiency: "Intermediate",
      keyPoints: [
        "RESTful API architecture",
        "Custom middleware development",
        "Error handling and validation",
        "Route organization and modularity",
        "Security best practices"
      ],
      projects: ["Tulynx", "CraftSense", "EndoSense", "Chibunova"],
      color: "from-green-600 to-teal-600"
    },
    "REST APIs": {
      name: "REST APIs",
      category: "Backend",
      description: "Comprehensive understanding of RESTful architecture principles. Experience in designing, developing, and consuming APIs with proper HTTP methods and status codes.",
      proficiency: "Intermediate",
      keyPoints: [
        "RESTful design principles",
        "HTTP methods (GET, POST, PUT, DELETE)",
        "API authentication and security",
        "Request/response handling",
        "API documentation and testing"
      ],
      projects: ["Tulynx", "CraftSense", "EndoSense"],
      color: "from-emerald-500 to-green-500"
    },
    "MongoDB": {
      name: "MongoDB",
      category: "Database",
      description: "Proficient in NoSQL database design and operations with MongoDB. Experience with Mongoose ODM, schema design, and database optimization.",
      proficiency: "Intermediate",
      keyPoints: [
        "NoSQL database design",
        "Mongoose schema and models",
        "CRUD operations and aggregations",
        "Database indexing and optimization",
        "Data relationships and population"
      ],
      projects: ["Tulynx", "CraftSense", "EndoSense", "Chibunova"],
      color: "from-green-500 to-emerald-600"
    },
    "SQL": {
      name: "SQL",
      category: "Database",
      description: "Strong foundation in relational database concepts and SQL queries. Experience with complex joins, subqueries, and database normalization.",
      proficiency: "Intermediate",
      keyPoints: [
        "Complex SQL queries and joins",
        "Database normalization",
        "Stored procedures and triggers",
        "Transaction management",
        "Query optimization"
      ],
      projects: ["Academic Projects", "DBMS Certification"],
      color: "from-blue-500 to-indigo-500"
    },
    "DBMS": {
      name: "DBMS",
      category: "Database",
      description: "Comprehensive understanding of database management systems, including ACID properties, transactions, and database design principles. NPTEL certified from IIT Kharagpur.",
      proficiency: "Intermediate",
      keyPoints: [
        "Database design and normalization",
        "ACID properties and transactions",
        "Concurrency control",
        "Index optimization",
        "Database security"
      ],
      projects: ["Academic Work", "Full Stack Applications"],
      color: "from-purple-500 to-pink-500"
    },
    "Java": {
      name: "Java",
      category: "Programming",
      description: "Solid foundation in Java programming with focus on OOP principles. LetsUpgrade Java Bootcamp certified with hands-on project experience.",
      proficiency: "Intermediate",
      keyPoints: [
        "Object-oriented programming concepts",
        "Exception handling",
        "Collections framework",
        "File I/O operations",
        "Multithreading basics"
      ],
      projects: ["Java Bootcamp Projects", "Academic Assignments"],
      color: "from-red-500 to-orange-600"
    },
    "DSA": {
      name: "DSA",
      category: "Programming",
      description: "Strong understanding of data structures and algorithms. Experience with problem-solving on competitive programming platforms and DevTown certified.",
      proficiency: "Intermediate",
      keyPoints: [
        "Arrays, Linked Lists, Stacks, Queues",
        "Trees and Graph algorithms",
        "Sorting and searching algorithms",
        "Dynamic programming basics",
        "Time and space complexity analysis"
      ],
      projects: ["Competitive Programming", "Technical Interviews"],
      color: "from-indigo-500 to-purple-500"
    },
    "Problem Solving": {
      name: "Problem Solving",
      category: "Programming",
      description: "Analytical and logical approach to solving complex problems. Experience with algorithmic thinking and optimization techniques.",
      proficiency: "Intermediate",
      keyPoints: [
        "Algorithmic thinking",
        "Code optimization",
        "Debugging and troubleshooting",
        "Breaking down complex problems",
        "Test-driven development"
      ],
      projects: ["All Development Work", "Hackathons"],
      color: "from-orange-500 to-red-500"
    },
    "Git/GitHub": {
      name: "Git/GitHub",
      category: "Tools & Others",
      description: "Proficient in version control using Git and collaboration on GitHub. LetsUpgrade Git & GitHub Bootcamp certified with experience in branching, merging, and pull requests.",
      proficiency: "Intermediate",
      keyPoints: [
        "Git branching and merging strategies",
        "GitHub collaboration workflows",
        "Conflict resolution",
        "Version control best practices",
        "Repository management"
      ],
      projects: ["All Projects on GitHub"],
      color: "from-gray-700 to-gray-900"
    },
    "VS Code": {
      name: "VS Code",
      category: "Tools & Others",
      description: "Expert user of Visual Studio Code with extensive knowledge of extensions, shortcuts, and productivity features for efficient development.",
      proficiency: "Advanced",
      keyPoints: [
        "Custom workspace configuration",
        "Extension ecosystem mastery",
        "Keyboard shortcuts proficiency",
        "Integrated debugging",
        "Git integration"
      ],
      projects: ["Daily Development Tool"],
      color: "from-blue-600 to-cyan-600"
    },
    "Excel": {
      name: "Excel",
      category: "Tools & Others",
      description: "Proficient in Microsoft Excel for data analysis, visualization, and reporting. Experience with formulas, pivot tables, and charts.",
      proficiency: "Intermediate",
      keyPoints: [
        "Advanced formulas and functions",
        "Pivot tables and charts",
        "Data analysis and visualization",
        "Conditional formatting",
        "VLOOKUP and data manipulation"
      ],
      projects: ["Data Analysis Tasks", "Reports"],
      color: "from-green-600 to-teal-600"
    },
    "Power BI": {
      name: "Power BI",
      category: "Tools & Others",
      description: "Experience with business intelligence and data visualization using Power BI. Skilled in creating interactive dashboards and reports.",
      proficiency: "Intermediate",
      keyPoints: [
        "Interactive dashboard creation",
        "Data modeling and transformation",
        "DAX formulas",
        "Report design and publishing",
        "Data source connectivity"
      ],
      projects: ["Analytics Projects", "Business Reports"],
      color: "from-yellow-500 to-orange-500"
    },
    "AWS": {
      name: "AWS (EC2, S3, IAM, Lambda, CloudWatch)",
      category: "Cloud & DevOps",
      description: "Experience with core AWS services for cloud computing, storage, security, and serverless computing. Familiar with deploying and managing applications on AWS infrastructure.",
      proficiency: "Intermediate",
      keyPoints: [
        "EC2 instance management and configuration",
        "S3 bucket storage and static hosting",
        "IAM roles and security policies",
        "Lambda serverless functions",
        "CloudWatch monitoring and logging"
      ],
      projects: ["Cloud Deployments", "Serverless Projects"],
      color: "from-orange-500 to-yellow-500"
    },
    "Git": {
      name: "Git, GitHub",
      category: "Cloud & DevOps",
      description: "Proficient in version control using Git and collaboration on GitHub. Experience in branching, merging, pull requests, and collaborative development workflows.",
      proficiency: "Intermediate",
      keyPoints: [
        "Git branching and merging strategies",
        "GitHub collaboration workflows",
        "Conflict resolution",
        "Version control best practices",
        "Repository management"
      ],
      projects: ["All Projects on GitHub"],
      color: "from-gray-600 to-gray-800"
    },
    "CI/CD": {
      name: "CI/CD Basics",
      category: "Cloud & DevOps",
      description: "Understanding of continuous integration and continuous deployment principles. Experience with automated testing, build pipelines, and deployment workflows.",
      proficiency: "Beginner",
      keyPoints: [
        "Automated build pipelines",
        "Continuous integration concepts",
        "Deployment automation basics",
        "GitHub Actions fundamentals",
        "Testing automation"
      ],
      projects: ["Automated Deployments"],
      color: "from-blue-500 to-purple-500"
    },
    "Docker": {
      name: "Docker (Basics)",
      category: "Cloud & DevOps",
      description: "Foundational knowledge of containerization with Docker. Experience with creating Docker images, running containers, and basic Docker Compose configurations.",
      proficiency: "Beginner",
      keyPoints: [
        "Docker image creation",
        "Container management",
        "Docker Compose basics",
        "Container networking fundamentals",
        "Volume management"
      ],
      projects: ["Containerized Applications"],
      color: "from-cyan-500 to-blue-500"
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML/CSS", "JavaScript", "React.js", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "SQL", "DBMS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "DSA", "Problem Solving"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git/GitHub", "VS Code", "Excel", "Power BI"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Git", "CI/CD", "Docker"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 glass-effect hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="text-muted-foreground text-sm font-medium bg-muted/50 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-primary/20 hover:text-primary cursor-pointer hover:scale-105 hover:shadow-lg"
                    onClick={() => {
                      setSelectedSkill(skillsData[skill]);
                      setIsModalOpen(true);
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Skills;
