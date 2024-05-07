import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroOverlay from "../HeroOverlay/HeroOverlay";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const sunbg = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
    ><HeroOverlay/>
      <motion.img 
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      style={{ y: yText }}
      src="/tagline.webp"/>
      <motion.div className="student"></motion.div>
      <motion.div style={{ x: yBg , y: sunbg}} className="stars"></motion.div>
      <motion.div style={{ x: xBg }} className="doodles"></motion.div>
    </div>
  );
};

export default Parallax;
