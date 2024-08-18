import facebook from "../img/facebook.png"
import twitter from "../img/twitter.webp"
import instagram from "../img/instagram.webp"


const imgs = [facebook, twitter, instagram]

function RedesSociales (){

    return(
        <div className="flex">
            {imgs.map((img, index) =>{
                return(
                        <img className="h-16 w-16 m-2 transition-opacity duration-300 ease-in-out hover:opacity-80" 
                        key={index} 
                        src={img} alt=""/>
                )
            })}
        </div>
    )
}

export default RedesSociales;