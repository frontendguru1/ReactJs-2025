import FullWidthContainer from "./FullWidthContainer";
import BannerImage from "../assets/img/banner_image.jpg";

const Banner = () => {
  return (
    <FullWidthContainer style="relative z-5">
      <div className="max-h-[700px] overflow-hidden">
        <img src={BannerImage} alt="Banner" className="img-fluid" />
      </div>
    </FullWidthContainer>
  );
};

export default Banner;
