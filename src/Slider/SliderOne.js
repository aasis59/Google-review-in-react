import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/slide";
import './sliderone.scss';
import review from "../review.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AppContext } from "../contextapi";
import { useContext } from "react";


const SliderOne =  () => {
  const {users}=useContext(AppContext);
  const datas = review.data;
 
  return (
    <div className="swiper-section">
      <div className="swiper-button-prev swiper1-prev"></div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          clickable: true,
          nextEl: ".swiper1-next",
          prevEl: ".swiper1-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper1-page",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      > 
      {users.includes("value-01") ? (
               datas.map((card)=>(  card.description !== "" && <SwiperSlide> 
                <Slide key={card.id} item={card} />
              </SwiperSlide> ))
            ) : (
              datas.map((card)=>( <SwiperSlide> 
          <Slide key={card.id} item={card} />
        </SwiperSlide> ))
            )}
      
       
       
      </Swiper>
     
      <div className="swiper-button-next swiper1-next"></div>

      <div className="swiper-pagination swiper1-page"></div>
    </div>
  );
};
export default SliderOne;
