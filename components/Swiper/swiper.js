import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Card from '../Card/card';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperComp = () => {
  return (
    <div className="w-11/12 h-full flex justify-center item-center my-0 mx-0 px-6">
      <Swiper
        className="hidden md:block"
        spaceBetween={23}
        slidesPerView={3}
        mousewheel
        scrollbar
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card1.jpg" menu="Hisana Dada Ayam" price="Rp.11.000" sale="4%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card2.jpg" menu="Hisana Sayap Ayam" price="Rp.9.000" sale="10%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card3.jpg" menu="Hisana Paha Bawah" price="Rp.10.000" sale="2%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card2.jpg" menu="Hisana Paha Atas" price="Rp.11.000" sale="20%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card5.jpg" menu="Hisana Ayam Mini" price="Rp.6.000" sale="13%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card1.jpg" menu="Hisana Dada Ayam" price="Rp.11.000" sale="9%" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="block md:hidden"
        spaceBetween={23}
        slidesPerView={1}
        mousewheel
        scrollbar
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card1.jpg" menu="Hisana Dada Ayam" price="Rp.11.000" sale="4%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card2.jpg" menu="Hisana Sayap Ayam" price="Rp.9.000" sale="10%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card3.jpg" menu="Hisana Paha Bawah" price="Rp.10.000" sale="2%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card2.jpg" menu="Hisana Paha Atas" price="Rp.11.000" sale="20%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card5.jpg" menu="Hisana Ayam Mini" price="Rp.6.000" sale="13%" />
        </SwiperSlide>
        <SwiperSlide className="py-8 px-2">
          <Card card="/card/card1.jpg" menu="Hisana Dada Ayam" price="Rp.11.000" sale="9%" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default SwiperComp