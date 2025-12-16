import { User } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">

      <div className="relative">
        <div className="w-40 h-35 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-items-start overflow-hidden">
            <img
             src='/perfil.png'
             alt='Foto perfil André'
             className='w-full h-full object-contain'
            />
          </div>
        </div>

        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-background" />
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">
          André Victor{' '}
          <span className="text-primary font-mono">| avictor.dev</span>
        </h1>
        <p className="text-muted-foreground font-medium">
          Desenvolvedor FullStack
        </p>
      </div>

      {/* Tagline */}
      <p className="text-sm text-muted-foreground italic font-mono px-4 py-2 bg-secondary/50 rounded-lg border border-border">
        {"// Transformando ideias em código"}
      </p>
    </div>
  );
};

export default ProfileHeader;
