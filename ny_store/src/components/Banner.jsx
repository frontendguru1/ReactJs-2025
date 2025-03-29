import FullWidthContainer from "./FullWidthContainer";
// import BannerImage from "../assets/img/banner_image.jpg";
import BannerImage from "../assets/img/banner_img.jpeg";

const Banner = () => {
  return (
    <FullWidthContainer style="relative z-5">
      <div className="max-h-[790px] overflow-hidden">
        <img src={BannerImage} alt="Banner" className="w-full h-auto" />
      </div>
    </FullWidthContainer>
  );
};

export default Banner;
