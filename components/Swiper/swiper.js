import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper.scss';

const SwiperComp = () => {
  return (
    <div className="flex">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="w-56 h-56 bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="w-56 h-56 bg-blue-400">Slide 2</SwiperSlide>
        <SwiperSlide className="w-56 h-56 bg-red-400">Slide 1</SwiperSlide>
        <SwiperSlide className="w-56 h-56 bg-blue-400">Slide 2</SwiperSlide>
       </Swiper>
    </div>
  )
}



export default SwiperComp