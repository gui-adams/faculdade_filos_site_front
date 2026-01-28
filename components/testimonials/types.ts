import type { StaticImageData } from "next/image";

export type Testimonial = {
  id: string;
  name: string;
  program: string;
  photo: StaticImageData; // ✅ static import = blur pronto + otimização
  excerpt: string;
  href: string;
};
