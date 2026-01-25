import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealCustom = ({ text, className = "" }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.2"]
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative ${className}`}>
      <h2 className="font-grotesk font-bold text-2xl md:text-[32px] leading-120 tracking-snug max-w-[760px] w-full min-h-[180px] md:min-h-[228px] flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </h2>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mr-2 mb-1">
      <motion.span
        style={{ opacity }}
        className="inline-block text-divider"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealCustom;