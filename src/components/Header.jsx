import Banner from './Banner'
import RedesSociales from './RedesSociales'

function Header(){
    const indices = [
        {id: 0, indice: "INDEX", href: "#"},
        {id: 1, indice: "LAVADOS", href: "#"},
        {id: 2, indice: "OFERTAS", href: "#"},
        {id: 3, indice: "GALERIA", href: "#"},
        {id: 4, indice: "CONOCEMOS", href: "#"},
        {id: 5, indice: "CONTACTENOS", href: "#"},
    ]
    return(
        <>
            <ul className="flex bg-gray-500 justify-around text-white">
                {indices.map(({indice, id, href}) =>{
                    return (
                        <li key={id} className="text-center w-full flex-wrap hover:bg-black">
                        <a key={id} href={href}>{indice}</a>
                    </li>
                )
                })}
            </ul>
            <RedesSociales/>
            <Banner/>
        </>
    )
}

export default Header;