import logoEncontrao from "@/assets/logo-encontrao.png";
import alma from "@/assets/alma-fandangueira.png";
import raca from "@/assets/banda-raca.png";
import onda from "@/assets/onda-fandangueira.png";
import logoFenix from "@/assets/logo-fenix.png";
import logoItaipu from "@/assets/logo-itaipu.png";
import logoDojo from "@/assets/logo-dojo.png";
import fundo from "@/assets/fundo-encontrao.jpg";

const atracoes = [
  { nome: "Alma Fandangueira", img: alma },
  { nome: "Banda Raça", img: raca },
  { nome: "Onda Fandangueira", img: onda },
];

const EncontraoSection = () => {
  return (
    <section id="encontrao" className="relative py-20 md:py-28 overflow-hidden">
      <img src={fundo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-card/85" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 mt-4">
            Itaipu Binacional apresenta
          </p>
          <img
            src={logoEncontrao}
            alt="Encontrão Cultural da Melhor Idade"
            className="w-full max-w-md md:max-w-lg mx-auto py-8 md:py-10 drop-shadow-xl"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6 mt-4">
            Venha <span className="text-gradient-orange">celebrar</span> com a gente
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Um dia inteiro de música, dança e tradição dedicado à melhor idade. Reúna a família e os amigos para curtir grandes atrações do fandango e da música regional.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-background/60 border border-border rounded-xl px-6 py-4">
            <span className="font-display text-xl md:text-2xl font-bold uppercase text-primary">28 de junho · 14h</span>
            <span className="hidden sm:block w-px h-6 bg-border" />
            <span className="font-display text-lg uppercase tracking-wide text-foreground">CTG Campo Mourão</span>
          </div>
          <p className="mt-4 font-body text-base text-foreground">
            <span className="font-bold text-primary">Entrada franca</span> — é necessário retirar os convites antecipados.
          </p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Informações com o Coordenador Sebastião Galdino (Tião do Karatê) — (44) 99861-0216
          </p>
        </div>

        <h3 className="text-center font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-8">
          Atrações <span className="text-gradient-orange">Confirmadas</span>
        </h3>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {atracoes.map((a) => (
            <div key={a.nome} className="group relative overflow-hidden rounded-xl border-2 border-primary/40 bg-black aspect-square shadow-lg">
              <img
                src={a.img}
                alt={a.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 md:p-10 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="flex flex-col items-center gap-4">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Realização</p>
              <img src={logoFenix} alt="Associação Fênix" className="h-16 w-auto" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Patrocínio</p>
              <img src={logoItaipu} alt="Itaipu Binacional" className="h-14 w-auto max-w-[280px]" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500">Apoio</p>
              <img src={logoDojo} alt="Associação Dojo" className="h-14 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncontraoSection;
