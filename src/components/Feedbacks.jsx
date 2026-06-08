import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import grass from "../assets/certificates/grass.jpeg";
import deloitte from "../assets/certificates/Deloitte.jpg";
import redbull from "../assets/certificates/red bull.jpg";
import hp from "../assets/certificates/hp.jpg";
import matrix from "../assets/certificates/matrix.jpeg";

const certifications = [
  {
    title: "Java Programming Internship – GRRAS Solutions",
    image: grass,
    link: "https://drive.google.com/file/d/1vIONDJpJ2362xnQdSL8-XJU2nZmHh4SK/view",
  },
  {
    title: "Data Analytics Job Simulation – Deloitte",
    image: deloitte,
    link: "https://drive.google.com/file/d/1ahMlt9uXTAULM97fPGG42iJmr-TFBT3J/view",
  },
  {
    title: "On-Premise Sales Job Simulation – Red Bull",
    image: redbull,
    link: "https://drive.google.com/file/d/1EOHfz9WSHPxFnvXK0ZL6BO0yH3Tnurv_/view",
  },
  {
    title: "Data Science & Analytics – HP LIFE",
    image: hp,
    link: "https://drive.google.com/file/d/1k1t41qPZTuowTNduXitSV7TlTtfr2cWr/view",
  },
  {
    title: "C++ with OOPs – Matrix",
    image: matrix,
    link: "https://drive.google.com/file/d/1jym9ujRal5LceBZtJmWbwJ-wtTHwQKKQ/view",
  },
];

const Feedbacks = () => {
  return (
    <div className='mt-8 bg-black-100 rounded-[20px] max-w-6xl mx-auto'>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My Learning Journey
          </p>

          <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[28px]">
            Certifications & Achievements.
          </h2>
        </motion.div>
      </div>

      <div className="-mt-20 pb-14 px-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
autoplay={{
  delay: 0,
  disableOnInteraction: false,
}}
speed={6000}
freeMode={true}
loop={true}
grabCursor={true}
spaceBetween={30}
breakpoints={{
  640: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
}}
        >
          {certifications.map((cert, index) => (
  <SwiperSlide key={index}>
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-black-200 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-[260px] object-cover"
        />

        <div className="p-5">
          <h3 className="text-white text-[18px] font-bold">
            {cert.title}
          </h3>

          <p className="text-[#915EFF] mt-3 font-semibold">
            Click to View Certificate →
          </p>
        </div>
      </div>
    </a>
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");