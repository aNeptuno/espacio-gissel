import about from '../img/presentacion.png';

export const Conoceme = () => {
    return(
        <div className="container">
            <div className="d-flex flex-row mb-3 p-50 about-cont">
                <div className="about-img">
                    <img src={about} alt="Espacio Gissel Logo" width="400px"/>
                </div>
                <div className="d-flex flex-column p-50 p-top-0">
                    <h2 className="subtitle">Bienvenidas y bienvenidos</h2>
                    <h1 className="title">Unas palabras sobre mi</h1>
                    <p className="text">
                        Gissel es pionera en pensar la belleza como un concepto holístico. 
                        De larga trayectoria profesional y de reconocido prestigio en Montevideo. 
                        En 2006 abre su propio centro dedicado exclusivamente a la belleza, la salud y el bienestar. 
                    </p>

                </div>
            </div>
        </div>
    ) 
}