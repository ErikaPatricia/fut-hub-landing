import { Download, Calendar, MapPin, Users, Trophy, Clock } from "lucide-react";
import logoCopa from "@/assets/logo-copa.png";

const TournamentSection = () => {
  return (
    <section id="torneio" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={logoCopa}
            alt="Logo Copa Social de Veteranos"
            className="w-32 h-auto md:w-40 mx-auto mb-8 animate-pulse-glow"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
            Copa Social de <span className="text-gradient-orange">Veteranos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            8 times convidados, com 12 jogadores cada, sendo obrigatório pelo menos 4 acima de 50 anos em campo. Premiação para todos os times!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Calendar, title: "Data", info: "Domingo, 29/03/2026" },
              { icon: Clock, title: "Horário", info: "8h às 17h" },
              { icon: Users, title: "Times", info: "8 equipes convidadas" },
              { icon: Trophy, title: "Premiação", info: "Para todos os times" },
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
            className="inline-flex items-center gap-3 bg-gradient-orange text-accent-foreground font-display text-lg font-semibold uppercase tracking-wide px-8 py-4 rounded-lg shadow-glow-orange hover:scale-105 transition-transform duration-200"
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
