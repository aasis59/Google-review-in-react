import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/slide";
import './sliderthree.scss';
import review from "../review.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Sliderthree =  () => {
  const datas = review.data;
 
  return (
    <div className="swiper-section">
      <div className="swiper-button-prev swiper3-prev"></div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          clickable: true,
          nextEl: ".swiper3-next",
          prevEl: ".swiper3-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper3-page",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >  {datas.map((card)=>( <SwiperSlide> 
          <Slide key={card.id} item={card} />
        </SwiperSlide> ))}
       
       
      </Swiper>
     
      <div className="swiper-button-next swiper3-next"></div>

      <div className="swiper-pagination swiper3-page"></div>
    </div>
  );
};
export default Sliderthree;
