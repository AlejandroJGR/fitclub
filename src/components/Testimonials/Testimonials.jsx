import { useRef, useState } from "react";
import "./Testimonials.css";
import testimonialsData from "../../data/testimonialsData";
import noise from "../../assets/noise.png";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Testimonials() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_95k265x",
        "template_82uphjt",
        form.current,
        "OD_TOWWfXs_YCSJQA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="testimonials__container" id="testimonials">
      <span>Testimonials</span>
      <h2>What They Say About Us</h2>
      <div className="testimonials">
        <div className="testimonial__text">
          {/* I did it first with map but this method was easier to understand 
      to change the content with arrows, at least for me */}
          <motion.p
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 0 }}
          >
            {testimonialsData[selected].review}
          </motion.p>
          <p>
            <motion.span
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ ...transition, duration: 0 }}
            >
              {testimonialsData[selected].name}
            </motion.span>{" "}
            - {testimonialsData[selected].status}
          </p>
        </div>
        <div className="testimonials__image">
          <motion.img
            src={noise}
            alt="background for testimonial"
            className="bg-image__testimonial"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          />
          <motion.img
            src={noise}
            alt="background for testimonial"
            className="bg-tr-image__testimonial"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          />
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 0 }}
            src={testimonialsData[selected].image}
            alt="testimonial"
            className="image__testimonial"
          />
        </div>
      </div>
      {/* {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonials">
          <div className="testimonial__text">
            <p>{testimonial.review}</p>
            <p>
              <span>{testimonial.name}</span> - {testimonial.status}
            </p>
          </div>

          <div className="testimonials__image">
            <img
              src={noise}
              alt="background for testimonial"
              className="bg-image__testimonial"
            />
            <img
              src={noise}
              alt="background for testimonial"
              className="bg-tr-image__testimonial"
            />
            <img
              src={testimonial.image}
              alt="testimonial"
              className="image__testimonial"
            />
          </div>
        </div>
      ))} */}
      <div className="testimonial__arrows">
        <button
          type="button"
          onClick={() => {
            selected === 0
              ? setSelected(tLength - 1)
              : setSelected((prev) => prev - 1);
          }}
        >
          <img src={leftArrow} alt="left arrow" />
        </button>
        <button
          type="button"
          onClick={() => {
            selected === tLength - 1
              ? setSelected(0)
              : setSelected((prev) => prev + 1);
          }}
        >
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
      <div className="newsletter">
        <h1>
          <span>READY TO</span>
          LEVEL UP YOUR BODY
          <span>WITH US?</span>
        </h1>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Write your email!"
            name="user_email"
          />
          <button type="submit" onClick={refreshPage}>
            Join Now!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
