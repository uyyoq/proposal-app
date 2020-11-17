import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Card from '../Card/card';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperComp = () => {
  return (
    <div className="w-11/12 h-full flex justify-center item-center my-0 mx-0 px-6">
      <Swiper
        spaceBetween={23}
        slidesPerView={3}
        mousewheel
        scrollbar
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default SwiperComp