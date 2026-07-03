import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-secondary/20">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img
              alt="Motor Prime Logo"
              className="h-12 w-auto object-contain cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH_yDh9MHP787jpIal-OjPg6gS4s3_CrCm7bij1JLSjjGwz7M6XUVOVtkGAfuBlQuafbbH6v1wTwpt8tFFriWgC_HpZK7vZ0ALMk44xjbW7GDPO_NztF7JtZNm2S5ZvsRsdw9HvceJqWYZmsi1o4N1gwNrq6le_H5xbplIBNvSeKj26paqeNQPAyZsEX94yGkj8RVILgFTkenoJuqIvggtpZH0RgwDq1pXd15P6X3cakscBpPu8Vn_nH2ZRnwUdnr5iSWggk-0bI"
            />
          </Link>
          <Link href="/">
            <span className="font-display-lg text-display-lg text-primary uppercase tracking-tighter hidden md:block cursor-pointer">
              Motor Prime
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="/#servicos">
            Serviços
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="/#sobre">
            Sobre
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="/#localizacao">
            Localização
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="/blog">
            Dicas
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a 
            className="bg-primary-container text-white px-6 py-2 rounded font-body-md text-body-md shadow-[inset_0_1px_rgba(255,255,255,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-2"
            href="https://wa.me/5516994654126"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
