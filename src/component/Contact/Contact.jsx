import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.div>
      <motion.h1>Contact</motion.h1>
      <motion.div className="contact-container"></motion.div>
    </motion.div>
  );
}
