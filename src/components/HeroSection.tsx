import fundo from "@/assets/fundo-encontrao.jpg";
import logoEncontrao from "@/assets/logo-encontrao.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center overflow-hidden pt-16">
      <img
        src={fundo}
        alt="Encontrão Cultural da Melhor Idade"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-center px-4 animate-fade-in-up mt-8 md:mt-12">
        <img
          src={logoEncontrao}
          alt="Encontrão Cultural da Melhor Idade"
          className="w-[90%] max-w-lg md:max-w-2xl mx-auto h-auto drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 mt-auto mb-24 md:mb-28 text-center px-4">
        <p className="font-display text-2xl md:text-4xl font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          28 de junho · 14h
        </p>
        <p className="font-display text-lg md:text-2xl font-semibold uppercase tracking-wide text-white/95 mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          CTG Campo Mourão
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
