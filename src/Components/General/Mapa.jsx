
import React from "react";
import "./Mapa.css";


const Comp1 = () => {
    const address = "Defensa 2207, 11800 Montevideo, Departamento de Montevideo";
    const lat = -34.8875360421242;
    const lon = -56.17495446539156;
    const zoom = 20; 


    return (
        /* <div className="Mapa">
            <iframe
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Espacio Gissel Google Map"
            ></iframe>
        </div> */
        <div>
            <iframe 
                width="600"
                height="450"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${address}&t=&zoom=${zoom}&maptype=roadmap&ie=UTF8&iwloc=&output=embed`}
                title="Espacio Gissel GoogleMap"
            ></iframe>
        </div>

    );
};


export default Comp1;