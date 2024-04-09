// import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../../assets/images/carouselImages";
import "../../../../sass/stylesheets/components/_ImageCarousel.scss";

const ImageCarousel = () => {
  //   const [settings, setSettings] = useState({
  //     autoplay: true,
  //     autoplaySpeed: 4000, // Change slide every 4 seconds
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 4 seconds
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth <= 768) {
  //         setSettings({ ...settings, slidesToShow: 1, slidesToScroll: 1 });
  //       } else {
  //         setSettings({ ...settings, slidesToShow: 1, slidesToScroll: 1 });
  //       }
  //     };

  //     window.addEventListener("resize", handleResize);

  //     // Clean up event listener on unmount
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, [settings]);

  //   const slideStyle = {
  //     width: "100%", // Adjust as needed
  //     height: "100%", // Adjust as needed
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
        <img className="carousel-img" src={image1} alt="Image 1" />
        </div>
        {/* <div>
          <img className="carousel-img" src={image2} alt="Image 2" />
        </div> */}
        <div>
          <img className="carousel-img" src={image3} alt="Image 3" />
        </div>
        <div>
        <img className="carousel-img" src={image4} alt="Image 4" />
        </div>
        <div>
          <img className="carousel-img" src={image5} alt="Image 5" />
        </div>
        <div>
          <img className="carousel-img" src={image6} alt="Image 6" />
        </div>
        {/* Add more image slides as needed */}
      </Slider>
    </div>
  );
};
export default ImageCarousel;
