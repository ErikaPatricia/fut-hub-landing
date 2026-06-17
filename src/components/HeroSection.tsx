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
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />

      <div className="relative z-10 text-center px-4 animate-fade-in-up mt-20 md:mt-24">
        <img
          src={logoEncontrao}
          alt="Encontrão Cultural da Melhor Idade"
          className="w-[90%] max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto h-auto drop-shadow-2xl"
        />
        <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-[#7a1d1d] mt-6 drop-shadow-lg">
          Vem aí!
        </p>
        <p className="font-display text-lg md:text-2xl font-semibold uppercase tracking-wide text-[#7a1d1d]/90 mt-3">
          28 de junho · 14h · CTG Campo Mourão
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#7a1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
