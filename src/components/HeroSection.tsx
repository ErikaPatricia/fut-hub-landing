import capaEncontrao from "@/assets/encontrao/capa.jpg.asset.json";
import logoEncontrao from "@/assets/logo-encontrao.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-16">
      <img
        src={capaEncontrao.url}
        alt="Público reunido no Encontrão Cultural da Melhor Idade no CTG Campo Mourão"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

      <div className="relative z-10 container mx-auto px-4 pb-20 md:pb-24 text-center">
        <img
          src={logoEncontrao}
          alt="Encontrão Cultural da Melhor Idade"
          className="w-[200px] md:w-[280px] mx-auto mb-[400px] drop-shadow-xl"
        />
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            Encontrão reúne mais de 2 mil pessoas no CTG Campo Mourão
          </h1>
        </div>
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
