function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black"> {/*h-screen ocupar toda a tela na vertical / overflow-hidden ele vai esconder a img*/}
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <img src="/imgs/hero.jpg" className="w-full h-full object-cover object-top opacity-90" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce cursor-pointer"> {/* Setinha */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>
        </section>
    )
}

export default Hero;