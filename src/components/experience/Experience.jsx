import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

let windowWidth = window.innerWidth

const Experience = () => {
  if (windowWidth > 1024) {
    return (
      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Scss/Sass</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience-backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Express.js</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience-programming">
            <h3>Programming Languages</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience-platform">
            <h3>Platforms</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Heroku</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Netlify</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>VS Code</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill  className='experience__details-icon'/>
                <div>
                <h4>Eclipse</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
  else {
    return (
      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <Swiper className="container experience__container" pagination = {true} modules={[Pagination]} slidesPerView={1}>
          <SwiperSlide className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Scss/Sass</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide className="experience-backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Express.js</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide className="experience-programming">
            <h3>Programming Languages</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide className="experience-platform">
            <h3>Platforms</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Heroku</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Netlify</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>VS Code</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill  className='experience__details-icon'/>
                <div>
                <h4>Eclipse</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    )
  }
}

export default Experience