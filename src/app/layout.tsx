import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IMPA - Reporte de Maltrato Animal",
  description: "Plataforma de ayuda animal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* IMPORTANTE: Agregamos esto para que funcionen los íconos (Material Symbols) del diseño original */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      {/* Agregamos font-display al body para que use la variable de Work Sans por defecto */}
      <body className={`${workSans.variable} font-display bg-background-light dark:bg-background-dark text-[#112111] dark:text-background-light`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children} 
          <Footer />
        </div>
      </body>
    </html>
  );
}