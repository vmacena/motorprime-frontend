export default function Footer() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        href="https://wa.me/5516994654126"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg fill="currentColor" height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-surface-container-highest text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale Conosco
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-secondary/10 w-full py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop gap-6">
          <div className="flex items-center gap-4">
            <img
              alt="Motor Prime Logo"
              className="h-8 w-auto object-contain opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH_yDh9MHP787jpIal-OjPg6gS4s3_CrCm7bij1JLSjjGwz7M6XUVOVtkGAfuBlQuafbbH6v1wTwpt8tFFriWgC_HpZK7vZ0ALMk44xjbW7GDPO_NztF7JtZNm2S5ZvsRsdw9HvceJqWYZmsi1o4N1gwNrq6le_H5xbplIBNvSeKj26paqeNQPAyZsEX94yGkj8RVILgFTkenoJuqIvggtpZH0RgwDq1pXd15P6X3cakscBpPu8Vn_nH2ZRnwUdnr5iSWggk-0bI"
            />
            <span className="font-headline-md text-headline-md text-primary">Motor Prime</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/motorprime.oficina/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <div className="font-label-sm text-label-sm text-secondary-fixed-dim text-center md:text-left">
            © 2026 Motor Prime - Oficina Mecânica em São Carlos. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
