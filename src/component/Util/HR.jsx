import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function HR() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <br />
      <br />
      <hr
        ref={ref}
        style={{
          width: isInView ? "100%" : "0",
          opacity: isInView ? 1 : 0,
          transition: "0.5s ease-in-out",
        }}
      />
      <br />
      <br />
    </>
  );
}
