import actionPhoto1 from "@/assets/football-action-1.jpg";
import actionPhoto2 from "@/assets/football-action-2.jpg";
import associationLogo from "@/assets/association-logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <img src={associationLogo} alt="Logo da Associação" className="w-16 h-16" />
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">
              Nossa <span className="text-primary">Associação</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold mt-2 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Fundada em 2010, a Associação Comunitária de Futebol tem como missão promover o esporte, 
              a integração social e o desenvolvimento comunitário através do futebol.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Ao longo dos anos, organizamos dezenas de torneios, revelamos talentos e fortalecemos 
              os laços da nossa comunidade. O esporte é nossa ferramenta de transformação social.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "15+", label: "Anos de história" },
                { value: "500+", label: "Atletas formados" },
                { value: "30+", label: "Torneios realizados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-card border border-border rounded-lg p-4">
                  <span className="font-display text-2xl md:text-3xl font-bold text-secondary block">{stat.value}</span>
                  <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={actionPhoto1}
              alt="Jogo de futebol comunitário"
              className="rounded-lg object-cover w-full h-48 md:h-64 border border-border"
            />
            <img
              src={actionPhoto2}
              alt="Time celebrando juntos"
              className="rounded-lg object-cover w-full h-48 md:h-64 border border-border mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
