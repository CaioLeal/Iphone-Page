function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between md:justify-center gap-4 md:gap-8">
                
                {/* Links: Escondidos no mobile (hidden), visíveis no desktop (md:flex) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#design" className="hover:text-gray-400 transition-colors">Design</a>
                    <a href="#camera" className="hover:text-gray-400 transition-colors">Câmera</a>
                    <a href="#performance" className="hover:text-gray-400 transition-colors">Performance</a>
                    <a href="#cores" className="hover:text-gray-400 transition-colors">Cores</a>
                </div>

                {/* Botão: Ajusta o tamanho da fonte e padding no mobile */}
                <button className="bg-blue-600 hover:bg-blue-700 px-5 py-1.5 md:px-6 md:py-2 rounded-full cursor-pointer text-sm md:text-base font-semibold transition-all active:scale-95">
                    Comprar
                </button>

                {/* Ícone de Menu (Apenas visual por enquanto para não quebrar seu JS) */}
                <div className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;