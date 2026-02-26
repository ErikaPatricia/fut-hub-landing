import { Instagram, Facebook, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Fale <span className="text-primary">Conosco</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-10 rounded-full" />

        <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Acompanhe nossas redes sociais para novidades sobre o torneio e entre em contato para dúvidas e inscrições.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Instagram, label: "@associacao_futebol", href: "#" },
            { icon: Facebook, label: "Associação Comunitária", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-6 py-4 hover:border-primary hover:shadow-glow-green transition-all duration-300"
            >
              <social.icon className="w-6 h-6 text-primary" />
              <span className="font-body text-foreground font-medium">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-secondary" />
            <span className="font-body">(11) 99999-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-secondary" />
            <span className="font-body">contato@associacao.com.br</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
