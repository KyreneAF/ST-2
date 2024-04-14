import "../../../sass/stylesheets/components/_AboutUs.scss";
// import video from "../../assets/videos/video.mp4";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="__about-us-header">
        <div className="__header-info">
          <span className="__info-head">Address:</span>
          <p>18110 midway rd suite 164 dallas, tx 75287</p>
        </div>
        <div className="__header-info">
          <span className="__info-head">Business hours:</span>
          <div>
            <p>tues-thurs: 3 pm - 10 pm</p>
            <p>fri-sat: 2 pm - 11 pm</p>
            <p>closed sun and mon</p>
          </div>
        </div>
        <div className="__header-info">
          <i className="fa-solid fa-phone __info-head"></i>
          <p>(682) 234-0954</p>
        </div>
        <a href="https://www.instagram.com/shotteabobabar/">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      {/* <div className="__about-us-text">
        <h2>Dallas' first alcoholic boba shop is here!</h2>
      </div> */}
      {/* <div className="__video">
        <video className="--video" controls autoPlay>
          <source src={video}></source>
        </video>
      </div> */}
    </div>
  );
};

export default AboutUs;
