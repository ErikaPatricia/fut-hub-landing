import heroBg from "@/assets/bg-fundo.png";
import logoCopa from "@/assets/logo-copa.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <img src={heroBg} alt="Campo de futebol iluminado" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <img
          src={logoCopa}
          alt="Logo Copa Social de Veteranos"
          className="w-56 h-auto md:w-72 lg:w-80 mx-auto mb-8 drop-shadow-2xl"
        />
        <div className="w-20 h-1 bg-gradient-orange mx-auto mb-6 rounded-full" />
        <p className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-wide mb-8">
          Domingo • 29/03/2026 • 8h às 17h Local: AABB (Associação Atlética Banco do Brasil)
        </p>
        <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3">
          <span className="text-primary font-display text-lg font-semibold">🏆 Premiação para todos os times</span>
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
