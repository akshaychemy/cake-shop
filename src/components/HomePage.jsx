// src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductPage from './ProductPage';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <center><h1>Welcome to Cake Shop</h1></center>
      <Slider {...settings}>
        <div>
          <motion.img
            src={'https://source.unsplash.com/random/1300x400?red-cake'}
            alt="Delicious Cake"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div>
          <motion.img
            src={'https://source.unsplash.com/random/1300x400?blue-cake'}
            alt="Another Delicious Cake"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div>
          <motion.img
            src={'https://source.unsplash.com/random/1300x400?vanilla-cake'}
            alt="Yet Another Delicious Cake"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </Slider>

      <ProductPage/>
    </motion.div>
  );
};

export default HomePage;
