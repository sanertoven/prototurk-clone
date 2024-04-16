function Header(props) {
    return (
        <div className="h-[3.75rem] border-b border-gray-100 w-full flex justify-between items-center px-5">
            <a href="#" className="text-2xl font-[600] inline-flex items-center text-saner">
                <span>./</span>{props.logo}
            </a>
            <form action="" className="w-1/3">
                <input type="text" placeholder="Ara" className="w-full bg-gray-100 h-10 px-3 placeholder-gray-500 rounded"/>
            </form>
            <a href="#" className="bg-saner text-white h-10 inline-flex items-center px-5 rounded">Giriş yap</a>
        </div>
    )
}

export default Header
