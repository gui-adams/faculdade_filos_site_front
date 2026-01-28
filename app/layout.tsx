// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05264c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://faculdadefilos.com.br"),
  title: {
    default: "Faculdade Filos — Ensino Superior de Excelência",
    template: "%s | Faculdade Filos",
  },
  description:
    "Graduação e pós-graduação com professores qualificados e infraestrutura moderna.",
  applicationName: "Faculdade Filos",
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Faculdade Filos",
    title: "Faculdade Filos — Ensino Superior de Excelência",
    description:
      "Graduação, pós e pesquisa. Inscreva-se no vestibular.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  category: "education",
  other: {
    "google-site-verification": "COLE_AQUI_O_TOKEN_DO_SEARCH_CONSOLE",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
                <Footer />
                        <WhatsAppFab phone="+55 61 99906-1757" />


      </body>
    </html>
  );
}
