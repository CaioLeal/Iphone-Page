function Hero() {
    return (
        // O contêiner pai se ajusta.
        // No mobile: altura automática (h-auto), relativo, e preenchimento superior (pt-20) para a navbar.
        // No desktop (md+): volta a ser h-screen e pt-0 para a imagem ser absoluta.
        <section className="relative h-auto md:h-screen pt-20 md:pt-0 overflow-hidden bg-black">
            
            {/* Contêiner da Imagem */}
            {/* No mobile: relativo, altura automática.
                No desktop (md+): absoluto para cobrir a tela inteira. */}
            <div className="relative md:absolute md:top-18 md:bottom-0 md:right-0 md:left-0 z-0">
                <img 
                    src="imgs/hero.jpg" 
                    // No mobile (h-auto): a imagem define a altura do contêiner sem cortes.
                    // No desktop (md+): volta a ser w-full h-full object-cover para preencher.
                    className="w-full h-auto md:h-full object-cover object-top opacity-80 block" 
                    alt="iPhone 17 Pro" 
                />
                
                {/* Degradê sobre a imagem (ajustado para funcionar com a nova altura) */}
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            {/* Setinha */}
            {/* Ajuste importante: No mobile com h-auto, a setinha 'bottom-8' ficaria logo abaixo da imagem.
                Para mantê-la próxima ao final da *tela* no mobile (não da imagem),
                e centralizá-la, usamos o truque do translate. */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-8 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    )
}

export default Hero;