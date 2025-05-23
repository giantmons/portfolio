"use client"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface FadeInOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const FadeInOnScroll = ({ children, className, ...rest }: FadeInOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25px" });

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 0, filter: "blur(40px)" }}
  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
  transition={{ duration: 0.7}}
  className={className}
  {...rest}
>
  {children}
</motion.div>

  );
};

export default FadeInOnScroll;
