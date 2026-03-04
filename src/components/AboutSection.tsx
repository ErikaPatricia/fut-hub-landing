import logoBranca from "@/assets/logo-branca.png";

const AboutSection = () => {
  return (
    <section id="associacao" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl">🔥</div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">
              Associação <span className="text-gradient-orange">Fênix</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-orange mt-2 rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Fundada em 2007 em Campo Mourão/PR, a Associação Fênix Social é uma entidade sem fins lucrativos dedicada ao suporte, inclusão e bem-estar da população idosa, promovendo desenvolvimento social, cultural e esportivo.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Através de bailes da terceira idade, torneios esportivos de futebol e truco, e programas educacionais, a Fênix combate o isolamento social e promove o envelhecimento ativo, saudável e com dignidade.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "18+", label: "Anos de atuação" },
                { value: "500+", label: "Idosos atendidos" },
                { value: "30+", label: "Eventos realizados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-muted/50 border border-border rounded-lg p-4">
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary block">{stat.value}</span>
                  <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={logoBranca}
              alt="Associação Fênix"
              className="w-64 md:w-80 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
