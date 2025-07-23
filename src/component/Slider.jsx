import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ import Autoplay module
import 'swiper/css';

const Slider = () => {
  return (
    <div className="bg-red-500 w-full h-auto">
      <Swiper
        modules={[Autoplay]} // ✅ register Autoplay module
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        <SwiperSlide><img src="images/Bag.png" alt="Bag" /></SwiperSlide>
        <SwiperSlide><img src="images/image-brownie-tablet.jpg" alt="Brownie" /></SwiperSlide>
        <SwiperSlide><img src="images/canvass.png" alt="Canvas" /></SwiperSlide>
        <SwiperSlide><img src="images/Hat.png" alt="Hat" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;