import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
import slider1 from '../../assets/images/chair.jpeg';  
import slider2 from '../../assets/images/clothes.jpeg';  
import slider3 from '../../assets/images/manpower.jpeg';  

const AppSlider = () => {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slider'>
      <div className="slider_content">
            <h2>NEVER STOP TRADING</h2>
            <hr/>
            <p>Push The Limit of The IMPOSSIBLE</p>
            <div className='button'>
              <button className="buy_now">Buy Now</button>
              <button className="sell_now">Sell Now</button>
            </div>
        </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={slider1} alt="First slide" className="d-block w-100" />
        </Carousel.Item>
  
        <Carousel.Item>
          <img src={slider2} alt="Second slide" className="d-block w-100" />
        </Carousel.Item>
  
        <Carousel.Item>
          <img src={slider3} alt="Third slide" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AppSlider;
