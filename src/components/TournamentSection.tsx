import { Download, Calendar, MapPin, Users } from "lucide-react";
import tournamentLogo from "@/assets/tournament-logo.png";

const TournamentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={tournamentLogo}
            alt="Logo do Torneio"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-pulse-glow rounded-full"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
            Copa <span className="text-gradient-gold">Comunitária 2026</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            O maior torneio de futebol da nossa comunidade está de volta! Reúna seu time e venha fazer parte desta história.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Calendar, title: "Data", info: "15 a 30 de Março de 2026" },
              { icon: MapPin, title: "Local", info: "Campo da Associação Comunitária" },
              { icon: Users, title: "Vagas", info: "16 equipes — Inscrições abertas" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-muted/50 border border-border rounded-lg p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.info}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-display text-lg font-semibold uppercase tracking-wide px-8 py-4 rounded-lg shadow-glow-gold hover:scale-105 transition-transform duration-200"
          >
            <Download className="w-5 h-5" />
            Baixar Regulamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
