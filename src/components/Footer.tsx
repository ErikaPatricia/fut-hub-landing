import { Instagram, Facebook } from "lucide-react";
import logoFenix from "@/assets/logo-fenix.png";
import logoItaipu from "@/assets/logo-itaipu.png";
import logoDojo from "@/assets/logo-dojo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-14">
      <div className="container mx-auto px-4">
        {/* Realização / Patrocínio / Apoio */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Realização */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Realização</p>
            <img src={logoFenix} alt="Associação Fênix" className="h-16 w-auto" />
          </div>

          {/* Patrocínio */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Patrocínio</p>
            <img src={logoItaipu} alt="Itaipu Binacional | Governo do Brasil" className="h-14 w-auto max-w-[280px]" />
          </div>

          {/* Apoio */}
          <div className="flex flex-col items-center gap-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Apoio</p>
            <img src={logoDojo} alt="Associação Dojo" className="h-14 w-auto" />
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/associacaofenixsocial/"
            className="text-neutral-400 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582039035620"
            className="text-neutral-400 hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center border-t border-neutral-200 pt-6">
          <p className="font-display text-xs uppercase tracking-widest text-neutral-400">
            Associação Fênix Social — Campo Mourão/PR
          </p>
          <p className="font-body text-xs text-neutral-400 mt-1">© 2026 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
