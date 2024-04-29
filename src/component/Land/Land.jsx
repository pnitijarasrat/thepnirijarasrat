import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Land.css";
import { IoFlowerOutline } from "react-icons/io5";

export default function Land() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <br />
      <motion.div
        className="land"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, y: 100 }}
      >
        <br />
        <motion.div
          className="flower-container"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <IoFlowerOutline size={50} className="flower" />
          <IoFlowerOutline size={50} className="flower" />
        </motion.div>
      </motion.div>
    </>
  );
}
