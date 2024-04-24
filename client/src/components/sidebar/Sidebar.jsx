import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import OutsideClickHandler from "react-outside-click-handler";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    <OutsideClickHandler
          onOutsideClick={() => {
            setOpen(false);
          }}
        >
      <motion.div className={`bg ${open?"whitebg":"null"}`} variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
      </OutsideClickHandler>
    </motion.div>
  );
};

export default Sidebar;
