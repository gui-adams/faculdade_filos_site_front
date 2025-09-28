export type Testimonial = {
  id: string;
  name: string;
  program: string;      // ex.: Filosofia, Ciências Econômicas
  photo: string;        // caminho em /public
  excerpt: string;      // pequeno trecho do depoimento
  href: string;         // link para ler completo
};
