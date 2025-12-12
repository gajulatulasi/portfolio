import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <motion.section 
            id="home"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Hero />
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="py-16 section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="section-container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <AnimatedCounter to={8} label="Projects" description="Full Stack & Frontend" />
                <AnimatedCounter to={10} label="Certifications" description="Technical Skills" />
                <AnimatedCounter to={5} label="Hackathons" description="Top Placements" />
                <AnimatedCounter to={9.52} label="CGPA" description="Academic Excellence" />
              </div>
            </div>
          </motion.section>

          <motion.section 
            id="about"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <About />
          </motion.section>

          <motion.section 
            id="skills"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Skills />
          </motion.section>

          <motion.section 
            id="projects"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.section>

          <motion.section 
            id="experience"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Experience />
          </motion.section>

          <motion.section 
            id="certifications"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Certifications />
          </motion.section>

          <motion.section 
            id="contact"
            className="section-bg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
