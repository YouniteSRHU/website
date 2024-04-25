import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const sunbg = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
    >
      <motion.img 
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: -100 }} 
      transition={{ duration: 1 }} 
      style={{ y: yText }}
      src="/younite-logo.png"/>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ x: yBg , y: sunbg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
