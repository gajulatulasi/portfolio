import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee, Star, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/gajulatulasi',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/gajulatulasi',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:gajulatulasi2505@gmail.com',
      color: 'hover:text-green-400'
    }
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, value: 'gajulatulasi2505@gmail.com', label: 'Email' },
    { icon: <Phone className="h-4 w-4" />, value: '+91 9391737745', label: 'Phone' },
    { icon: <MapPin className="h-4 w-4" />, value: 'Tirupati, Andhrapradesh, India', label: 'Location' }
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-border/20">
      {/* Background Animation */}
      <div className="absolute inset-0 dark:block hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="section-container py-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Brand Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold gradient-text">Gajula Tulasi</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative web solutions 
              and building meaningful digital experiences.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`p-1.5 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 rounded-xl border border-border/20 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-1">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-2 p-1.5 rounded-lg border border-border/20 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5">
                  <div className="text-primary flex-shrink-0">{contact.icon}</div>
                  <div>
                    <div className="text-foreground font-medium text-sm">{contact.value}</div>
                    <div className="text-muted-foreground text-xs">{contact.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-border/20 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
              <span>by Gajula Tulasi</span>
              <span className="ml-4 opacity-70">© {currentYear}</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
