import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-secondary/20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop h-20">
          <div className="flex items-center gap-4">
            <img
              alt="Motor Prime Logo"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH_yDh9MHP787jpIal-OjPg6gS4s3_CrCm7bij1JLSjjGwz7M6XUVOVtkGAfuBlQuafbbH6v1wTwpt8tFFriWgC_HpZK7vZ0ALMk44xjbW7GDPO_NztF7JtZNm2S5ZvsRsdw9HvceJqWYZmsi1o4N1gwNrq6le_H5xbplIBNvSeKj26paqeNQPAyZsEX94yGkj8RVILgFTkenoJuqIvggtpZH0RgwDq1pXd15P6X3cakscBpPu8Vn_nH2ZRnwUdnr5iSWggk-0bI"
            />
            <span className="font-display-lg text-display-lg text-primary uppercase tracking-tighter hidden md:block">
              Motor Prime
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="#servicos">
              Serviços
            </a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="#sobre">
              Sobre
            </a>
            <a className="text-secondary hover:text-primary transition-colors font-body-md text-body-md" href="#localizacao">
              Localização
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary-container text-white px-6 py-2 rounded font-body-md text-body-md shadow-[inset_0_1px_rgba(255,255,255,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone
              </span>
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 bg-surface-container"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-8 flex flex-col items-start justify-center gap-6">
            <h1 className="font-display-lg text-display-lg md:text-[72px] md:leading-[80px] text-white tracking-tighter">
              Seu carro merece padrão <span className="text-primary-container text-glow">prime</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Especialistas em diagnóstico e reparo automotivo. Agende seu serviço com quem entende do seu carro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a
                className="bg-primary-container text-white px-8 py-4 rounded text-center font-body-md text-body-md shadow-[inset_0_1px_rgba(255,255,255,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300"
                href="#servicos"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-lowest" id="servicos">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-2">Nossos Serviços</h2>
              <p className="font-body-md text-body-md text-secondary">Precisão cirúrgica para cada componente do seu veículo.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-surface-container border border-secondary/10 rounded-lg p-6 hover:border-primary-container/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full bg-carbon-fiber">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">oil_barrel</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Troca de Óleo</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                Lubrificantes de alta performance para garantir a longevidade e proteção máxima do motor.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-surface-container border border-secondary/10 rounded-lg p-6 hover:border-primary-container/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full bg-carbon-fiber">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Freios</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                Manutenção e upgrade de sistemas de frenagem, discos ventilados e pastilhas cerâmicas.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-surface-container border border-secondary/10 rounded-lg p-6 hover:border-primary-container/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full bg-carbon-fiber">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">car_repair</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Suspensão</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                Ajuste fino, geometria 3D e instalação de suspensões esportivas para máxima aderência.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-surface-container border border-secondary/10 rounded-lg p-6 hover:border-primary-container/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full bg-carbon-fiber">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">settings_input_component</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Injeção Eletrônica</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                Mapeamento, diagnóstico computadorizado e otimização da ECU para ganho de potência.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-surface-container border border-secondary/10 rounded-lg p-6 hover:border-primary-container/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full bg-carbon-fiber">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center mb-6 text-primary-container">
                <span className="material-symbols-outlined text-3xl">fact_check</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-3">Revisão Geral</h3>
              <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                Inspeção completa de todos os sistemas vitais do veículo para garantir máxima segurança e performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 relative overflow-hidden bg-background" id="localizacao">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="col-span-1 md:col-span-5 mb-12 md:mb-0">
            <h2 className="font-display-lg text-display-lg text-white mb-6">Localização</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-8">
              Venha nos visitar e conheça nossa estrutura premium de perto.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary border border-secondary/20 shrink-0">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-white font-bold">Endereço</h4>
                  <p className="font-body-md text-body-md text-secondary">
                    Rua José Rodrigues Sampaio, 351 - Centreville<br />
                    São Carlos - SP, 13560-710
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary border border-secondary/20 shrink-0">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-white font-bold">Horário de Funcionamento</h4>
                  <p className="font-body-md text-body-md text-secondary">
                    Seg - Sex: 08:00 - 18:00<br />
                    Sáb: 08:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-secondary/20 shadow-2xl relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=Rua%20Jos%C3%A9%20Rodrigues%20Sampaio%2C%20351%20-%20Centreville%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-710&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        href="#"
      >
        <svg fill="currentColor" height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-surface-container-highest text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale Conosco
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-secondary/10 w-full py-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop gap-6">
          <div className="flex items-center gap-4">
            <img
              alt="Motor Prime Logo"
              className="h-8 w-auto object-contain opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH_yDh9MHP787jpIal-OjPg6gS4s3_CrCm7bij1JLSjjGwz7M6XUVOVtkGAfuBlQuafbbH6v1wTwpt8tFFriWgC_HpZK7vZ0ALMk44xjbW7GDPO_NztF7JtZNm2S5ZvsRsdw9HvceJqWYZmsi1o4N1gwNrq6le_H5xbplIBNvSeKj26paqeNQPAyZsEX94yGkj8RVILgFTkenoJuqIvggtpZH0RgwDq1pXd15P6X3cakscBpPu8Vn_nH2ZRnwUdnr5iSWggk-0bI"
            />
            <span className="font-headline-md text-headline-md text-primary">Motor Prime</span>
          </div>
          <div className="font-label-sm text-label-sm text-secondary-fixed-dim text-center md:text-left">
            © 2024 Motor Prime - Seu padrão prime. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a className="font-label-sm text-label-sm text-secondary-fixed-dim hover:text-on-surface transition-colors" href="#">
              Termos de Uso
            </a>
            <a className="font-label-sm text-label-sm text-secondary-fixed-dim hover:text-on-surface transition-colors" href="#">
              Privacidade
            </a>
            <a className="font-label-sm text-label-sm text-secondary-fixed-dim hover:text-on-surface transition-colors" href="#">
              Trabalhe Conosco
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
