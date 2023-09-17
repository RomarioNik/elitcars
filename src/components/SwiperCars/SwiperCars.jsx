// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import { Thumb, Image } from "./SwiperCars.styled";

import Car1 from "../../images/wallpeper/car-1.jpeg";
import Car2 from "../../images/wallpeper/car-2.jpeg";
import Car3 from "../../images/wallpeper/car-3.jpeg";

const SwiperCars = () => {
  return (
    <Swiper
      // style={{ position: "absolute" }}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Thumb>
          <Image src={Car1} alt="" />
        </Thumb>
      </SwiperSlide>
      <SwiperSlide>
        <Thumb>
          <Image src={Car2} alt="" />
        </Thumb>
      </SwiperSlide>
      <SwiperSlide>
        <Thumb>
          <Image src={Car3} alt="" />
        </Thumb>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCars;
