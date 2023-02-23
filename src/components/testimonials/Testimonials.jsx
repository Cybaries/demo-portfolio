import React from 'react'
import './testimonials.css'
import Testi_1 from '../../assets/Testi_01.jpg'
import Testi_2 from '../../assets/Testi_02.jpg'
import Testi_3 from '../../assets/Testi_03.jpg'
import Testi_4 from '../../assets/Testi_04.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";



const data = [
  {
    id: 1,
    name: 'Earnest Achiever',
    title: 'CEO of ABC Company',
    image: Testi_1,
    description: 'Lorem ipsum'
  },
  {
    id: 2,
    name: 'Earnest Achiever',
    title: 'CEO of ABC Company',
    image: Testi_2,
    description: 'Lorem ipsum'
  },
  {
    id: 3,
    name: 'Earnest Achiever',
    title: 'CEO of ABC Company',
    image: Testi_3,
    description: 'Lorem ipsum'
  },
  {
    id: 4,
    name: 'Earnest Achiever',
    title: 'CEO of ABC Company',
    image: Testi_4,
    description: 'Lorem ipsum'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={true} modules={[Pagination]}className='container testimonials__container' >
        {
          data.map((item, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="avatar">
                  <img src={item.image} alt="" />
                </div>
                <h5 className='name'>{item.name}</h5>
                <h5>{item.title}</h5>
                <small className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora eaque! Officia officiis enim dolor, doloremque, consectetur veniam excepturi corrupti odio cum natus exercitationem animi vero doloribus laboriosam dignissimos at</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials