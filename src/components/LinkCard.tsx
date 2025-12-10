import { ChevronRight, LucideIcon } from 'lucide-react';

interface LinkCardProps {
  icon: LucideIcon;
  label: string;
  href: string;
  delay: number;
}

const LinkCard = ({ icon: Icon, label, href, delay }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 w-full p-4 bg-card border border-border rounded-lg 
                 hover:border-primary/50 hover:bg-secondary/50 
                 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-lg hover:shadow-primary/10
                 animate-fade-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="flex-1 font-medium text-foreground">{label}</span>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </a>
  );
};

export default LinkCard;
