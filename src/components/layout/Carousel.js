import React, { Component }  from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
class Carousel extends Component{
  render() {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div className="carousel-item firstPict white-text" href="#one!">
              <h2 className="paddinTop">Home sweet home</h2>
              <p className="white-text">This is your first panel</p>
            </div>
          </div>
          <div className="each-slide">
            <div className="carousel-item secPict white-text" href="#two!">
              <h2 className="paddinTop">Home Ta Rue</h2>
              <p className="white-text">This is your second panel</p>
            </div>
          </div>
          <div className="each-slide">
            <div className="carousel-item thirdPict white-text" href="#three!">
              <h2 className="paddinTop">Rad Duang Land</h2>
              <p className="white-text">This is your third panel</p>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Carousel;