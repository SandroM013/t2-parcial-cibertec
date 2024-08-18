import { useState, useEffect } from "react";

function MostrarFechayHora() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="flex justify-around bg-black text-white">
            <p>Hoy es: {hora.toLocaleDateString()}</p>
            <p>Son las: {hora.toLocaleTimeString()}</p>
        </div>
    );
}

export default MostrarFechayHora;