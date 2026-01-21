import { useEffect, useRef } from "react";

export default function SpinningText({
  text,
  duration = 10,
  className = "",
  reverse = false,
  radius = 100,
  separator = " • ",
  separatorColor = "#F97316", // orange-500
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const textContent = text || textElement.textContent;
    textElement.innerHTML = "";

    // Split text by separator and add separators back
    const segments = textContent.split(separator);
    const fullText = segments.join(separator);
    
    // Split into individual characters
    const characters = fullText.split("");
    
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.position = "absolute";
      span.style.left = "50%";
      span.style.top = "50%";
      span.style.transformOrigin = `0 ${radius}px`;
      span.style.fontSize = "14px";
      span.style.fontWeight = "600";
      span.style.letterSpacing = "0.5px";
      
      // Check if character is a separator (• or +)
      if (char === "•" || char === "+") {
        span.style.color = separatorColor;
        span.style.fontSize = "16px";
        span.style.fontWeight = "700";
      } else {
        span.style.color = "#000000";
      }
      
      const angle = (360 / characters.length) * index;
      span.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${reverse ? -angle : 0}deg)`;
      
      textElement.appendChild(span);
    });

    // Apply rotation animation to container
    const keyframes = reverse
      ? [{ transform: "rotate(360deg)" }, { transform: "rotate(0deg)" }]
      : [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }];

    textElement.animate(keyframes, {
      duration: duration * 1000,
      iterations: Infinity,
      easing: "linear",
    });
  }, [text, duration, reverse, radius, separator, separatorColor]);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <div
        ref={textRef}
        className="absolute inset-0"
      />
    </div>
  );
}