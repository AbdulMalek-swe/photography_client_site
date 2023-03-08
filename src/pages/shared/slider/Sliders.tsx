import React from 'react';
import Slider from "react-slick";

import sliderPic1 from '../../../assets/slider/01.jpg'
import sliderPic2 from '../../../assets/slider/02.jpg'
import sliderPic3 from '../../../assets/slider/03.jpg'
const Sliders = ():JSX.Element => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots:boolean) => (
          <div
            style={{
              backgroundColor: "#ddd",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: (i:number) => (
          <div
            style={{
              width: "30px",
              color: "blue",
              border: "1px blue solid"
            }}
          >
            {i + 1}
          </div>
        )
      };
     
      return (
        <div>
      
          <Slider {...settings}>
          <div>
              <img src={sliderPic3}/>
            </div> <div>
              <img src={sliderPic1}/>
            </div> <div>
              <img src={sliderPic2}/>
            </div>
            
          </Slider>
        </div>
    );
};

export default Sliders;