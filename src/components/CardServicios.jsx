import servicio_1 from "../img/Servicios/servicio_1.jpg"
import servicio_2 from "../img/Servicios/servicio_2.webp"
import servicio_3 from "../img/Servicios/servicio_3.jpg"

const arrayImgServcios = [servicio_1, servicio_2, servicio_3]

function CardServicios(){
    return (
        <>
            <h2 className="text-center text-4xl m-3" >Servicios</h2>
            <div className="flex flex-nowrap justify-between">
                {arrayImgServcios.map((imagen, index) =>{
                    return(
                        <img className="h-64 w-full m-5 p-4 border-2 rounded border-black" key={index} src={imagen}/>
                    )
                })}
            </div>
        </>
    )
}

export default CardServicios