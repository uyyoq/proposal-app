import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperComp = () => {
  return (
    <div className="">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="flex h-64 w-full mx-0 my-auto bg-green-600">Slide 1</SwiperSlide>
        <SwiperSlide  className="flex h-64 w-full mx-0 my-auto bg-yellow-600">Slide 2</SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
    </div>
  )
}


export default SwiperComp