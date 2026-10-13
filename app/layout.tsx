import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Henri Portfolio",
  description:
    "Miguel Henri, light designer da Crewlighthouse, baseado em Campinas, SP. Operação, programação e light design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
