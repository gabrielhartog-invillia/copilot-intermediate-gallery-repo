import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Camera } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galeria de Fotos & Portfólio",
  description: "Uma coleção curada de fotografias e trabalhos criativos exibindo um portfólio pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {/* Navigation Header */}
        <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Camera className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Galeria Portfólio
                </h1>
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/gallery" className="nav-link">
                  Galeria
                </Link>
                <Link href="/upload" className="nav-link">
                  Enviar
                </Link>
                <Link href="/admin" className="btn-primary">
                  Admin
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        {/* Rodapé com logotipo e direitos autorais */}
        <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  Galeria Portfólio
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Galeria Portfólio. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
