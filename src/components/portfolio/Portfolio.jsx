import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  },
  {
    id: 2,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  },
  {
    id: 3,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  },
  {
    id: 4,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  },
  {
    id: 5,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  },
  {
    id: 6,
    title: 'This is a portfolio item title',
    image: IMG,
    github: 'https://github.com',
    liveDemo: 'https://github.com'
  }
]

let windowWidth = window.innerWidth

const Portfolio = () => {
  if (windowWidth > 1024) {
    return (
      <section id='portfolio'>
        <h5>What I've Done</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
          {
            data.map(item => {
              return (
                <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                <a href={item.github} className="btn">Github</a>
                <a href={item.liveDemo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
               </div>
              </article>
            )
            })
          }
        </div>
      </section>
    )
  }
  else {
    return (
      <section id='portfolio'>
        <Swiper className="container portfolio__container" pagination={true} modules={[Pagination]}>
          {
            data.map(item => {
              return (
                <SwiperSlide className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                <a href={item.github} className="btn">Github</a>
                <a href={item.liveDemo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
               </div>
              </SwiperSlide>
            )
            })
          }
        </Swiper>
      </section>
    )
  }
}

export default Portfolio