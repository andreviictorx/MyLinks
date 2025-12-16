import { Github, Instagram, Linkedin, MessageCircle, FileText, Layout } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeToggle from '@/components/ThemeToggle';
import ProfileHeader from '@/components/ProfileHeader';
import LinkCard from '@/components/LinkCard';


const links = [
  { icon: Layout, label: 'Portfólio', href: 'https://portfolio-avictordev.vercel.app/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/andreviictorx' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/avictor.dev' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreviictor/'},
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5598985193088' },
  { icon: FileText, label: 'Currículo', href: '/curriculo-andre-victor.pdf' },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <ThemeToggle />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <ProfileHeader />
          
          {/* Links */}
          <nav className="space-y-3">
            {links.map((link, index) => (
              <LinkCard
                key={link.label}
                icon={link.icon}
                label={link.label}
                href={link.href}
                delay={300 + index * 100}
              />
            ))}
          </nav>
          
          {/* Footer */}
          <footer 
            className="text-center pt-8 animate-fade-in opacity-0"
            style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
          >
            <p className="text-xs text-muted-foreground font-mono">
              Desenvolvido por{' '}
              <span className="text-primary">André Victor</span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
