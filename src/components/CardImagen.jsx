import img_1 from "../img/Imagenes/img_1.jpeg"
import img_2 from "../img/Imagenes/img_2.webp"
import img_3 from "../img/Imagenes/img_3.jpeg"
import img_4 from "../img/Imagenes/img_4.jpeg"
import { useState } from "react";

const arrayImgs = [
    {
        src: img_1,
        texto: "Iniciando el proceso: Preparando el auto para un lavado profundo con jabón especializado."
    },
    {
        src: img_2,
        texto: "Cuidado al detalle: Limpiando la superficie del auto con una esponja suave para eliminar impurezas."
    },
    {
        src: img_3,
        texto: "Alta presión: Enjuagando el auto con agua a alta presión para un acabado impecable."
    },
    {
        src: img_4,
        texto: "Antes y después: Observa la diferencia que un lavado profesional puede hacer en la apariencia de tu auto."
    }
];

function CardImagen() {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <>
            <h2 className="text-center text-4xl m-3">Imágenes</h2>
            <div className="flex flex-wrap justify-between p-5">
                {arrayImgs.map(({ src, texto }, index) => (
                    <div
                        key={index}
                        className="relative m-5 p-4 border-2 rounded border-black h-64 w-64"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <img
                            className={`h-full w-full object-cover transition-opacity duration-500 ${hoverIndex === index ? 'opacity-0' : 'opacity-100'}`}
                            src={src}
                            alt={`Imagen ${index + 1}`}
                        />
                        {hoverIndex === index && (
                            <p className="absolute inset-0 flex items-center justify-center 
                            text-center text-black bg-white bg-opacity-80 p-4 
                            rounded transition-opacity duration-500">
                                {texto}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardImagen;
