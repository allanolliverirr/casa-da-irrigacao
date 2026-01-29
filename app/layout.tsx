import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casadairrigacao.com.br'),
  title: {
    default: 'Casa da Irrigacao | Irrigacao residencial e agricola com suporte tecnico',
    template: '%s | Casa da Irrigacao',
  },
  description:
    'Loja especializada em irrigacao: aspersores, tubos, conexoes e gotejamento. Atendimento tecnico, solucoes completas e entrega para todo o Brasil.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.casadairrigacao.com.br',
    siteName: 'Casa da Irrigacao',
    title: 'Casa da Irrigacao',
    description: 'Solucoes em irrigacao com credibilidade: produtos, projetos e suporte tecnico.',
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
