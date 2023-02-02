
import testimonios from '../img/testimonios.jpg';

function Testimonios () {
    return (
        <div className="pt-5 position-relative">
            <div className="d-flex flex-column testimonios-mainpage container">
                <div className='testimonios-mainpage-welcome'>
                    <h2 className="subtitle pt-4 ">Testimonios</h2>
                    <h1 className="title pt-2 pb-4">Palabras dulces de mis pacientes</h1>
                </div>
            </div>
            <div className='testimonios-mainpage-img'>
                <img src={testimonios} alt="Testimonios" />
                <div className="testimonios-mainpage-bg"></div>
            </div>
            <div className='testimonios-carousel-container position-absolute'>
                SAFDASDASDAS
            </div>
        </div>
    )
}

export default Testimonios;