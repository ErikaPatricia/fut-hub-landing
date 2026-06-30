import logoEncontrao from "@/assets/logo-encontrao.png";
import logoFenix from "@/assets/logo-fenix.png";
import logoItaipu from "@/assets/logo-itaipu.png";
import logoDojo from "@/assets/logo-dojo.png";
import fundo from "@/assets/fundo-encontrao.jpg";
import foto1 from "@/assets/encontrao/IMG_4304.jpg.asset.json";
import foto2 from "@/assets/encontrao/IMG_4263.jpg.asset.json";
import foto3 from "@/assets/encontrao/IMG_4269.jpg.asset.json";
import foto4 from "@/assets/encontrao/IMG_4272.jpg.asset.json";
import foto5 from "@/assets/encontrao/IMG_4283.jpg.asset.json";
import foto6 from "@/assets/encontrao/IMG_20260628_131802.jpg.asset.json";

const fotosEvento = [
  {
    nome: "Público na área do palco",
    img: foto1.url,
  },
  {
    nome: "Recepção do público no evento",
    img: foto2.url,
  },
  {
    nome: "Salão preparado para o encontrão",
    img: foto3.url,
  },
  {
    nome: "Casais dançando no Encontrão",
    img: foto4.url,
  },
  {
    nome: "Salão lotado durante a dança",
    img: foto5.url,
  },
  {
    nome: "Brindes e premiações do evento",
    img: foto6.url,
  },
];

const EncontraoSection = () => {
  return (
    <section id="encontrao" className="relative py-20 md:py-28 overflow-hidden">
      <img src={fundo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Itaipu Binacional apresenta
            </p>
            <img
              src={logoEncontrao}
              alt="Encontrão Cultural da Melhor Idade"
              className="w-full max-w-md md:max-w-lg mx-auto py-6 md:py-8 drop-shadow-xl"
            />
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
              Encontro Cultural da Melhor Idade reúne mais de <span className="text-gradient-orange">2 mil pessoas</span> no CTG Campo Mourão
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Realizado no dia 28 de junho, no CTG Campo Mourão, o Encontro Cultural da Melhor Idade reuniu mais de 2 mil pessoas em uma tarde de música, dança, integração e valorização da cultura regional. O evento contou com a participação de representantes de 26 municípios e foi marcado pela animação do público, consolidando-se como um grande sucesso.
              </p>
              <p>
                Promovido pela Associação Fênix, com patrocínio da Itaipu Binacional e apoio da Associação Dojo, o encontro teve apresentações da Alma Fandangueira, Banda Raça e Onda Fandangueira, celebrando o envelhecimento ativo, a convivência comunitária e as tradições culturais da região.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
            {fotosEvento.map((foto) => (
              <div key={foto.nome} className="group relative overflow-hidden rounded-xl border border-border bg-muted aspect-[4/3] shadow-lg">
                <img
                  src={foto.img}
                  alt={foto.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 md:p-10">
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
      </div>
    </section>
  );
};

export default EncontraoSection;
