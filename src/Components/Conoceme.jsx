import about from '../img/presentacion.png';
import hand from '../img/hand-holding-heart-solid.svg';

export const Conoceme = () => {
    return(
        <div className="container">
            <div className="d-flex flex-row mb-3 p-50 about-cont">
                <div className="about-img">
                    <img src={about} alt="Espacio Gissel Logo" width="400px"/>
                </div>
                <div className="d-flex flex-column p-50 p-top-0 about-text">
                    <h2 className="subtitle pt-2 pb-2">Bienvenidas y bienvenidos</h2>
                    <h1 className="title pt-2 pb-4">Unas palabras sobre mi</h1>
                    <p className="text">
                        Gissel es pionera en pensar la belleza como un concepto holístico. 
                        De larga trayectoria profesional y de reconocido prestigio en Montevideo. 
                        En 2006 abre su propio centro dedicado exclusivamente a la belleza, la salud y el bienestar. 
                    </p>
                    <div class="img">
                        <img src={hand} alt="welcome" width="200px"/>
                    </div>

                </div>
            </div>
        </div>
    ) 
}

