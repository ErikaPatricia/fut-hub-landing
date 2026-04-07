const BailaoSection = () => {
  return (
    <section id="bailao" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">💃</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Bailão da <span className="text-gradient-orange">Melhor Idade</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-orange mx-auto mb-8 rounded-full" />
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Acontece toda sexta-feira. Iniciamos com um almoço e começa o bailão, que vai até o fim do dia!
        </p>
      </div>
    </section>
  );
};

export default BailaoSection;
