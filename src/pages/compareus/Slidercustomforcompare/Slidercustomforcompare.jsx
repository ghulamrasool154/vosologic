import "./Slidercustomforcompare.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slidercustomforcompare.css";

import { Compareslider } from "../../../feature/Compareslider";
const Slidercustomforcompare = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // autoplay: true,
    centerPadding: "140px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 200,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "90px",
        },
      },
    ],
  };

  return (
    <div className="Slidercustomforcompare">
      <Slider {...settings}>
        {Compareslider.map((element, index) => {
          return (
            <div className="slider---box--" key={index}>
              <img src={element.img} alt={element.title} />
              <h3 className="silder---ttile---compare">{element.title}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slidercustomforcompare;
