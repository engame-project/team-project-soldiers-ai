import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img from "../../assets/change.jpg";
import img1 from "../../assets/education.jpg";
import img3 from "../../assets/images 2.jpg";
import img4 from "../../assets/solving.jpg";
import img5 from "../../assets/What-Is-AI-Featured.webp";
import img6 from "../../assets/first.jpg";

// Slide data with unique text
const slides = [
  {
    image: img1,
    title: "🚀 AI-Powered Future Awaits!",
    subtitle: "Master machine learning & neural networks like a pro.",
  },
  {
    image: img5,
    title: "🤖 Build Intelligent Systems",
    subtitle: "Train AI models to think, analyze, and solve real-world problems.",
  },
  {
    image: img3,
    title: "💡 Unlock the Secrets of AI",
    subtitle: "Dive into deep learning, computer vision & NLP.",
  },
  {
    image: img,
    title: "🌎 AI Changing the World",
    subtitle: "Explore how artificial intelligence is revolutionizing industries.",
  },
  {
    image: img4,
    title: "🧠 Learn AI from Experts",
    subtitle: "Hands-on AI courses crafted by industry leaders.",
  },
  {
    image: img6,
    title: "🚀 Transform Ideas into AI Solutions",
    subtitle: "Bring AI-powered applications to life with ease!",
  },
];

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center items-center text-white text-center px-6">
              {/* Animated Title */}
              <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
                {slide.title}
              </h2>
              {/* Subtitle */}
              <p className="mt-2 text-lg md:text-xl opacity-80 animate-fade-in delay-300">
                {slide.subtitle}
              </p>
              {/* CTA Button */}
              <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all border border-blue-400 animate-glow">
                Get Started 
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
