import { useRef } from "react";
import "./Portfolio.scss";
import {Link} from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Yuvotsav'24",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Yuvotsav is a culmination of different spheres of college life to provide a blend of fun cultural, academic activities for the youth. The fest boasts many events with exciting prizes and all day fete for the whole fest.",
    link:"/YOUTHFEST"
  },
  {
    id: 2,
    title: "News",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The News is your go-to place for all the latest updates related to the exciting events and festivals organized by Younite. Stay informed about upcoming happenings, highlights, and behind-the-scenes stories!",
    link:"/NEWS"
  },
  {
    id: 3,
    title: "About Us",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Younite is a dynamic student-led ecosystem at SRHU (Swami Rama Himalayan University) that bridges the gap between various colleges within the university. Through a vibrant array of events, workshops, and cultural activities, Younite fosters collaboration, creativity, and a sense of community.",
    link:"/ABOUT US"
  },
  {
    id: 4,
    title: "Contact us",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Have a question, comment, or just want to say hello? We’re all ears! The Younite team is dedicated to providing you with the support you need. Whether you’re curious about our events, seeking collaboration, or need assistance, we’re here to help.",
    link:"/CONTACT US"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="P-container">
        <div className="P-wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={item.link}><button>view now</button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Highlights</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;