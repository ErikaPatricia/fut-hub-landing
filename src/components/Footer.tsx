import logosRodape from "@/assets/logos-rodape.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <img
            src={logosRodape}
            alt="Realização: Associação Fênix | Patrocínio: Itaipu Binacional, Governo do Brasil | Apoio: Associação Dojo"
            className="w-full max-w-3xl mx-auto h-auto"
          />
        </div>
        <div className="text-center">
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Associação Fênix Social — Campo Mourão/PR
          </p>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
