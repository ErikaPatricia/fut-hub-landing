import logoItaipu from "@/assets/logo-itaipu.png";

const SponsorBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white border border-neutral-200 rounded-xl p-8 md:p-10 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
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
