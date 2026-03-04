import { Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Dúvidas ou <span className="text-gradient-orange">Informações</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-orange mx-auto mb-10 rounded-full" />

        <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Entre em contato para dúvidas, inscrições e mais informações sobre a Copa Social de Veteranos.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {[
            { icon: Phone, label: "44 99861-0216 (Tião)", href: "tel:+5544998610216" },
            { icon: Phone, label: "44 99893-8574 (Fátima — Pres. Ass. Fênix)", href: "tel:+5544998938574" },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-4 hover:border-primary hover:shadow-glow-orange transition-all duration-300"
            >
              <contact.icon className="w-6 h-6 text-primary" />
              <span className="font-body text-foreground font-medium">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
