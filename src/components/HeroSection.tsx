import heroBg from "@/assets/hero-bg.jpg";
import tournamentLogo from "@/assets/tournament-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Campo de futebol iluminado"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <img
          src={tournamentLogo}
          alt="Logo do Torneio"
          className="w-36 h-36 md:w-48 md:h-48 mx-auto mb-8 drop-shadow-2xl"
        />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-4">
          <span className="text-gradient-gold">Copa</span>{" "}
          <span className="text-foreground">Comunitária</span>
        </h1>
        <p className="font-display text-2xl md:text-3xl font-medium text-foreground/80 uppercase tracking-widest mb-6">
          Torneio de Futebol 2026
        </p>
        <div className="inline-flex items-center gap-3 bg-muted/60 backdrop-blur-sm border border-border rounded-lg px-6 py-3">
          <span className="text-secondary font-display text-xl font-semibold">15 a 30 de Março</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground font-body">Campo da Associação</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
