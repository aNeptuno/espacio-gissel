
import './WppBtn.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import Button from 'react-bootstrap/Button';

import healy from '../../img/healycircle.png';

import { HashLink } from 'react-router-hash-link';


function WppBtn() {
    return (
        <div className='w-100'>
            <Button className="btn-wsp">
                    <FontAwesomeIcon icon={ faWhatsapp } />
            </Button>
            <Button className="btn-healy" as={HashLink} to="/Terapias/Frecuencias">
                <img src={healy} alt="terapia-frecuencias" className="btn-healy p-0"/>
            </Button>
        </div>
    )
}

export default WppBtn;