import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({setOpen}) => {
  const items = ["YUVOTSAV'24","NEWS", "ABOUT US", "CONTACT US"];
  const navigate = useNavigate()
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
        <a onClick={()=>{navigate(`/${item}`)
    setOpen((prev) => !prev)}}> {item}</a> 
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
