import Carousel from 'react-bootstrap/Carousel';

import header1 from '../img/header1.png';
import header2 from '../img/header2.jpg';
import header3 from '../img/header3.jpg';

<div className="w-40">
    <Carousel fade controls={false} interval={20000000}>
        <Carousel.Item>
            <img
                className="d-block"
                src={header1}
                alt="First slide"
                width="450px"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block"
                src={header2}
                alt="Second slide"
                width="400px"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block"
                src={header3}
                alt="Third slide"
                width="400px"
            />
        </Carousel.Item>
    </Carousel>
</div>