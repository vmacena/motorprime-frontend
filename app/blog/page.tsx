import Link from 'next/link';
import { artigos } from './artigos';

export const metadata = {
  title: 'Dicas de Manutenção Automotiva | Motor Prime São Carlos',
  description: 'Confira nossas dicas sobre conserto de veículos, problemas comuns como falhação e barulhos, e saiba a hora certa da manutenção.',
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6 font-body-md text-body-md">
            <span className="material-symbols-outlined">arrow_back</span>
            Voltar para o início
          </Link>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-white mb-4 tracking-tighter">
            Dicas Motor <span className="text-primary-container text-glow">Prime</span>
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Tudo o que você precisa saber para manter seu carro saudável e seguro rodando por São Carlos e região.
          </p>
        </div>

        {/* Artigos List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artigos.map((artigo) => (
            <Link 
              key={artigo.slug} 
              href={`/blog/${artigo.slug}`}
              className="bg-surface-container border border-secondary/10 rounded-xl p-6 hover:border-primary-container/50 transition-all duration-300 group flex flex-col h-full bg-carbon-fiber"
            >
              <div className="text-secondary-fixed-dim text-label-sm font-label-sm mb-4">
                {artigo.data}
              </div>
              <h2 className="font-headline-md text-headline-md text-white mb-4 group-hover:text-primary transition-colors">
                {artigo.titulo}
              </h2>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                {artigo.resumo}
              </p>
              <div className="flex items-center gap-2 text-primary font-body-md text-body-md font-bold mt-auto">
                Ler artigo completo
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
