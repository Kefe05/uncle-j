import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import companies from '../assets/company.json'
import { sliderSettings } from "../assets/slider.js";
import './achievement.css'

function Achievement(){


  return(
    <section className="a-container">
      <div className="a-wrapper">
        <h2>Achievements</h2>
        <Swiper>
          {
            companies.map((company, index) => (
              <SwiperSlide key={index}>
                 <div className="achievement">
                  <div className="a-image-container">

                  </div>
                  <h2>{company.company}</h2>
                  <h4>{company.role}</h4>
                  <span>{company.date}</span>
                  <p>
                    {company.description}
                  </p>

               </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
           
      </div>
    </section>
  )
}


export default Achievement