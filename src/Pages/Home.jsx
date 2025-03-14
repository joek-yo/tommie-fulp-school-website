// src/pages/Home.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};


const images = [
  "/Images/Hero 1.jpg",
  "/Images/Hero 2.jpg",
  "/Images/Hero 3.jpg",
  "/Images/Hero 4.jpg",
  "/Images/Hero 5.jpg",
  "/Images/Hero 6.jpg",
  "/Images/Hero 7.jpg",
];

// Hero section image array
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-[70px] relative w-full h-screen">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="relative w-full h-screen">
              {/* Ken Burns Effect (Zooming Image) */}
              <motion.img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
              />
              {/* Dark Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h1 className="text-5xl font-bold drop-shadow-lg">
                    Welcome to Tommie Fulp Academy
                  </h1>
                  <p className="mt-4 text-lg drop-shadow-md">
                    Empowering young minds with quality education and strong values.
                  </p>
                  <a href="/admissions">
                    <motion.button
                      className="mt-6 px-6 py-3 bg-[#FFD700] text-[#000080] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#FFC107] transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Enroll Now
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};

export default Home;
