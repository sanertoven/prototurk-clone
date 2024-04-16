function ASide(props) {
    return (
        <aside className="w-64 border-r p-2 flex flex-col border-gray-100 divide-solid divide-gray-100 divide-y">
            <nav className="mb-4">
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Anasayfa</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Akış</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Keşfet</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Makaleler</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Soru & Cevap</a>
            </nav>

            <nav className="mt-4 pt-3">
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">HTML</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">CSS</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">JavaScript</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">PHP</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">MySQL</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Laravel</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Python</a>
                <a href="#" className="flex items-center h-10 rounded px-3 text-base text-saner font-medium hover:bg-gray-100 transition-colors">Git</a>
            </nav>

            <div className="mt-auto pt-3">
                <button className="bg-[#18191a] w-full text-white h-10 rounded flex items-center px-4 text-sm font-[600] hover:bg-[#2d2f31] transition-colors">
                    Koyu mod
                </button>
            </div>
        </aside>
    )
}

export default ASide
