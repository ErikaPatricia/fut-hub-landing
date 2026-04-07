import { Instagram, Facebook } from "lucide-react";
import logoFenix from "@/assets/logo-fenix.png";

const Footer = () => {
  return (
    <footer className="bg-white py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src={logoFenix} alt="Associação Fênix" className="h-16 w-auto" />
        </div>

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
