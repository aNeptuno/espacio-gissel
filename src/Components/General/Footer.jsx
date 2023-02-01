
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Mapa from './Mapa';

function Footer () {
    return(
        <div className="contacto" id="contacto">
            <div className="d-flex flex-row pt-5">
                <h1 className="title">Espacio</h1>
                <h1 className="title">Gissel</h1>
            </div>
            <Mapa />
            <div className='contacto-info'>
                <p>
                    <FontAwesomeIcon icon={faWhatsapp} color="#ffffff"/> 
                    <span className='text'>094140929</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} color="#ffffff"/>
                    <span className='text'>Defensa 2207</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faPaperPlane} color="#ffffff"/>
                    <span className='text'>gisselarmonia@gmail.com</span>
                </p>
            </div>
        </div>
       
    ) 
}

export default Footer;