import carBanner from "../img/Carwash/carwashBanner.webp"
import MostrarFechayHora from "./MostrarFechayHora"
import servicio_1 from "../img/Servicios/servicio_1.jpg"
import servicio_2 from "../img/Servicios/servicio_2.webp"
import servicio_3 from "../img/Servicios/servicio_3.jpg"
import { useEffect, useState } from "react"

const arrayImgServcios = [carBanner, servicio_1, servicio_2, servicio_3];

function Banner() {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndice((prevIndice) => 
                prevIndice === arrayImgServcios.length - 1 ? 0 : prevIndice + 1
            );
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 className="text-center text-4xl m-3">Carwash</h1>
            <img className="h-640 w-full p-5 bg-gray-500" 
            src={arrayImgServcios[indice]} 
            alt={`Banner ${indice + 1}`} />
            <MostrarFechayHora/>
        </>
    );
}

export default Banner;