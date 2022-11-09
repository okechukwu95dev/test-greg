import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setGlobalVision } from '../../Redux/Features/VisionSlice'
import { setGlobalDna } from '../../Redux/Features/DnaSlice';
import { setGlobalBackground } from '../../Redux/Features/BackgroundSlice';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';



// REDUX SET UP
const ImageGrid = ({dataArray,name, swiperIndex}) => {

  const swiperNavPrev  = useRef(null)
  const swiperNavNext  = useRef(null)

  
  
  const dispatch = useDispatch()
  const selectImage = (image)=>{
    switch(name) {
      case 'VISION':
        dispatch(setGlobalVision(image))
        break;
      case 'DNA':
        dispatch(setGlobalDna(image))
        break;
      case 'BG':
        dispatch(setGlobalBackground(image))
        break;
      default:
       console.log("yeeeeee")
    }
  }


  return (
    // <section className="ImageGrid">
    <>
      <div className = 'imageGridWrapper'>
      <div className = 'swiper-prev' ref={swiperNavPrev}></div>

        <Swiper
          slidesPerView={10}
          spaceBetween={5}
          loop={true}
          navigation={{
            prevEl: swiperNavPrev.current,
            nextEl: swiperNavNext.current,
          }}
          onInit={(swiper)=>{
            swiper.params.navigation.prevEl = swiperNavPrev.current;
            swiper.params.navigation.nextEl = swiperNavNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dataArray.map((item,key)=>
            <SwiperSlide>
              <img 
                src={item.image} 
                alt='nothere' 
                className='myThumb' 
                onClick={()=> selectImage(item.image)} 
              />
            </SwiperSlide>
          )} 
        </Swiper>
        <div className = 'swiper-next' ref={swiperNavNext}></div>
        <div>{name}</div>
      </div>
      
    </>

  )
}

export default ImageGrid