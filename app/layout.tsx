import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motor Prime | Oficina Mecânica em São Carlos - SP | Conserto de Veículos",
  description: "Oficina mecânica especializada em São Carlos - SP. Troca de óleo, freios, suspensão, injeção eletrônica e revisão geral. Agende pelo WhatsApp!",
  keywords: ["oficina mecânica", "conserto de veículos", "São Carlos", "mecânico em São Carlos", "manutenção automotiva", "troca de óleo", "freios", "suspensão"],
  metadataBase: new URL("https://motorprimeoficina.com.br"),
  openGraph: {
    title: "Motor Prime | Oficina Mecânica em São Carlos - SP",
    description: "Seu carro merece padrão prime. Especialistas em diagnóstico e reparo automotivo em São Carlos.",
    url: "https://motorprimeoficina.com.br",
    siteName: "Motor Prime",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motor Prime | Oficina Mecânica em São Carlos",
    description: "Oficina mecânica especializada em São Carlos - SP.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Motor Prime",
    "image": "https://motorprimeoficina.com.br/icon.png",
    "@id": "https://motorprimeoficina.com.br",
    "url": "https://motorprimeoficina.com.br",
    "telephone": "+5516994654126",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua José Rodrigues Sampaio, 351 - Centreville",
      "addressLocality": "São Carlos",
      "addressRegion": "SP",
      "postalCode": "13560-710",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.0153, 
      "longitude": -47.8911 
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
