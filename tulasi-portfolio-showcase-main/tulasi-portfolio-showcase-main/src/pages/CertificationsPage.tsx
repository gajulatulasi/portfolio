import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

const CertificationsPage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <div className="section-container py-8">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="mb-8 border-primary/30 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          <Certifications showAll={true} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CertificationsPage;
