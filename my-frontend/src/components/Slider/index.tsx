
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css'


const sliderImg = [
  {
    path: 'http://matrix.md/images/promo/413/matrix1.jpg',

  },
  {
    path:'http://matrix.md/images/promo/413/matrix2a.jpg',

  },
  {
    path:'http://matrix.md/images/promo/413/matrix3a.jpg',

  },
  {
    path:'http://matrix.md/images/promo/413/matrix4a.jpg'

  }
];

export default function MySlider  () {
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true

    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImg.map(({path})=>
            <img src={path}/>
          )}
        </Slider>
      </div>
    );
}