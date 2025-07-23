import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  return (
    <div className='bg-red'>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
           <SwiperSlide><img src="images/Bag.png" alt="" /></SwiperSlide>
           <SwiperSlide><img src="images/belt.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/canvass.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/Hat.png" alt="" /></SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Slider;
      

