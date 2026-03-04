import logoItaipu from "@/assets/logo-itaipu.png";

const SponsorBanner = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-xl p-8 md:p-10 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Patrocínio
          </p>
          <img
            src={logoItaipu}
            alt="Itaipu Binacional — Mais que Energia | Governo do Brasil — Do lado do povo brasileiro"
            className="max-w-xl w-full mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
