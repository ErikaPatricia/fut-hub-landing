import logoCopa from "@/assets/logo-copa.png";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";
import g7 from "@/assets/galeria-7.jpg";
import g8 from "@/assets/galeria-8.jpg";
import g9 from "@/assets/galeria-9.jpg";

const photos = [g2, g3, g5, g6, g7, g4, g9, g1, g8];

const TournamentSection = () => {
  return (
    <section id="torneio" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <img
            src={logoCopa}
            alt="Logo Copa Social de Veteranos"
            className="w-32 h-auto md:w-40 mx-auto mb-8 animate-pulse-glow"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
            Copa Social de <span className="text-gradient-orange">Veteranos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            8 times convidados, com 12 jogadores cada, sendo obrigatório pelo menos 4 acima de 50 anos em campo.
            Premiação para todos os times!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={src}
                alt={`Copa Social de Veteranos - Foto ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
