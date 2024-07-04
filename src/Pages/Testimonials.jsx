import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <>
      <div className="mb-6 md:mb-12">
        <h3 className="font-bold text-center text-2xl md:text-5xl mb-3">
          What Our Customers <br /> Are Saying
        </h3>
        <p className="text-gray-700 text-center text-sm md:text-lg">
          Hear from our satisfied customers about their experiences <br /> with our
          products and services.
        </p>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials?.map((testimonial) => (
          <SwiperSlide>
            <div className="w-3/4 mx-auto space-y-6 border px-8 py-4 rounded-md shadow-md">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={testimonial?.image}
                alt=""
              />
              <p className="text-2xl">{testimonial?.testimonial}</p>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial?.name}
                </h3>
                <p className="text-gray-500">{testimonial?.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
