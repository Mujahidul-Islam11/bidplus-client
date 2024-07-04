import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    },[])

      return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            testimonials?.map(testimonial => <SwiperSlide>
                <h3>{testimonial?.name}</h3>
            </SwiperSlide>)
        }
      </Swiper>
      )
};

export default Testimonials;
