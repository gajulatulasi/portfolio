
import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Gajula_Tulasi_Resume.pdf';
    link.click();
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-blue-400 font-medium">Hi, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Gajula Tulasi</span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-300">
                <span className="gradient-text font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl">
              Full Stack Developer passionate about creating innovative web solutions. 
              Experienced in MERN stack with a focus on user experience and clean code. 
              Currently pursuing B.Tech in CSE with 9.52 CGPA.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://github.com/gajulatulasi', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://linkedin.com/in/gajulatulasi', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('mailto:gajulatulasi2505@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated background shapes */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl">
                  <img 
                    src="/lovable-uploads/35613cd6-dfef-4abd-bc79-69959fc7171a.png" 
                    alt="Gajula Tulasi - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
