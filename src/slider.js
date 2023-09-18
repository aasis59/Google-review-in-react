import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './home.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './slide';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
        
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
    >
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      <SwiperSlide><Slide/></SwiperSlide>
      
    </Swiper>
  );
};