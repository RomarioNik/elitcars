// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/scrollbar";

import {
  Thumb,
  Image,
  Description,
  Titile,
  Text,
  NavLinkStyled,
} from "./SwiperCars.styled";

import Car1 from "../../images/wallpeper/car-1.jpg";
import Car2 from "../../images/wallpeper/car-2.jpeg";
import Car3 from "../../images/wallpeper/car-3.jpeg";

const SwiperCars = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Thumb>
          <Image src={Car1} alt="The best cars" />
          <Description>
            <Titile>Best Cars</Titile>
            <Text>We are expert in car rental</Text>
            <NavLinkStyled to="/catalog">Rent car</NavLinkStyled>
          </Description>
        </Thumb>
      </SwiperSlide>
      <SwiperSlide>
        <Thumb>
          <Image src={Car2} alt="Best journey by car" />
          <Description>
            <Titile>Best Journey</Titile>
            <Text>We make your drive memorable</Text>
            <NavLinkStyled to="/catalog">Rent car</NavLinkStyled>
          </Description>
        </Thumb>
      </SwiperSlide>
      <SwiperSlide>
        <Thumb>
          <Image src={Car3} alt="Best car prices" />
          <Description>
            <Titile>Best Prices</Titile>
            <Text>Enjoy your holidays with us</Text>
            <NavLinkStyled to="/catalog">Rent car</NavLinkStyled>
          </Description>
        </Thumb>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCars;
