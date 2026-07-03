import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artigos } from '../artigos';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    return { title: 'Artigo não encontrado' };
  }

  return {
    title: `${artigo.titulo} | Motor Prime`,
    description: artigo.resumo,
    openGraph: {
      title: artigo.titulo,
      description: artigo.resumo,
      type: 'article',
      publishedTime: artigo.data,
    },
  };
}

// Next.js feature to generate static pages at build time
export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 font-body-md text-body-md">
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar para Dicas
        </Link>

        {/* Article Header */}
        <header className="mb-12 border-b border-secondary/10 pb-12">
          <div className="text-secondary-fixed-dim text-label-sm font-label-sm mb-4 uppercase tracking-wider">
            {artigo.data}
          </div>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-white mb-6 tracking-tighter">
            {artigo.titulo}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            {artigo.resumo}
          </p>
        </header>

        {/* Article Content */}
        <article className="space-y-6 font-body-md text-body-md text-secondary">
          {artigo.conteudo.map((paragrafo, index) => (
            <p key={index} className="leading-relaxed">
              {paragrafo}
            </p>
          ))}
        </article>

        {/* Call to Action */}
        <div className="mt-16 bg-surface-container border border-primary-container/20 rounded-xl p-8 text-center bg-carbon-fiber">
          <h3 className="font-headline-md text-headline-md text-white mb-4">
            Seu carro está apresentando algum desses problemas?
          </h3>
          <p className="font-body-md text-body-md text-secondary mb-8">
            Não arrisque sua segurança ou o motor do seu veículo. Agende uma avaliação detalhada conosco em São Carlos.
          </p>
          <a 
            className="inline-flex items-center gap-2 bg-primary-container text-white px-8 py-4 rounded font-body-md text-body-md shadow-[inset_0_1px_rgba(255,255,255,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300"
            href="https://wa.me/5516994654126"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar pelo WhatsApp
            <span className="material-symbols-outlined">chat</span>
          </a>
        </div>

      </div>
    </div>
  );
}
