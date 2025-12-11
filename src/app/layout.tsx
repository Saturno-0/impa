import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={`${workSans.variable} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <div className="flex flex-col min-h-screen">
          {children} {/* Aquí se renderiza tu page.tsx */}
        </div>
      </body>
    </html>
  );
}