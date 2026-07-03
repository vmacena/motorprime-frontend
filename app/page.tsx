import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 bg-surface-container"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-8 flex flex-col items-start justify-center gap-6">
            <h1 className="font-display-lg text-display-lg md:text-[72px] md:leading-[80px] text-white tracking-tighter">
              Seu carro merece padrão <span className="text-primary-container text-glow">prime</span>. Em São Carlos.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Especialistas em conserto de veículos, diagnóstico e reparo automotivo. Agende seu serviço com os melhores mecânicos de São Carlos.
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

      {/* About Section */}
      <section className="py-24 bg-background" id="sobre">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">Sobre a Motor Prime</h2>
              <div className="space-y-4 font-body-md text-body-md text-secondary">
                <p>
                  A Motor Prime é a sua <strong>oficina mecânica em São Carlos</strong> especializada em entregar o mais alto padrão em manutenção automotiva. Com anos de experiência no mercado de <strong>conserto de veículos</strong>, nossa missão é garantir que seu carro receba um tratamento de excelência, seja em revisões preventivas ou reparos complexos.
                </p>
                <p>
                  Nossos <strong>mecânicos</strong> são altamente treinados e utilizam equipamentos de diagnóstico de ponta para identificar e resolver problemas em sistemas de injeção eletrônica, suspensão, freios e motor. Sabemos o quanto você valoriza seu veículo, por isso trabalhamos com transparência, peças de qualidade e atendimento personalizado.
                </p>
                <p>
                  Se você procura um lugar de confiança para cuidar do seu carro em <strong>São Carlos e região</strong>, a Motor Prime é a escolha certa. Traga seu veículo e experimente nosso padrão prime.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-secondary/20 shadow-2xl">
              <div className="absolute inset-0 bg-carbon-fiber flex items-center justify-center">
                 <span className="material-symbols-outlined text-[100px] text-primary/20">
                   car_repair
                 </span>
              </div>
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
                    Sáb: 08:00 - 12:00
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
    </>
  );
}
