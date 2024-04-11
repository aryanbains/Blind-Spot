import React from "react";
import Typewriter from "typewriter-effect";
import "./index.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Type = () => {
  return (
    <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="TypeEffect">
      <Typewriter 
        options={{
          strings: ["Innovation", "Adaptable", "Ingenious"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;