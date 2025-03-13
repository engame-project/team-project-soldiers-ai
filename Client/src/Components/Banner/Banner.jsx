import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/image.jpeg';
import img1 from '../../assets/images (1).jpeg';
import img3 from '../../assets/images 2.jpg';
import img4 from '../../assets/what-is-ai-artificial-intelligence.webp';
import img5 from '../../assets/What-Is-AI-Featured.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full h-[400px] object-cover' src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px] object-cover' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px] object-cover' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px] object-cover' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[400px] object-cover' src={img5} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;