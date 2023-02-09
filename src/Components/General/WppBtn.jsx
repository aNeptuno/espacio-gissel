
import './WppBtn.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import Button from 'react-bootstrap/Button';

import healy from '../../img/healycircle.png';


function WppBtn() {
    return (
        <div>
            <Button className="btn-wsp">
                    <FontAwesomeIcon icon={ faWhatsapp } />
            </Button>
            <Button className="btn-healy">
                <img src={healy} alt="terapia-frecuencias" className="btn-healy p-0"/>
            </Button>
        </div>
    )
}

export default WppBtn;