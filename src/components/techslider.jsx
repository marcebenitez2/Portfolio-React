import React from "react";
import { useSpring, animated } from "react-spring";

const techNames = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Nextjs",
  "Nodejs",
  "MongoDB",
  "MySQL",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Nextjs",
  "Nodejs",
  "MongoDB",
  "MySQL",
  "PHP",
];

function Techslider() {
  const [props, set] = useSpring(() => ({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    reset: true,
    reverse: true,
    onRest: () => {
      set({
        reverse: !props.reverse,
      });
    },
  }));

  return (
    <div className="w-full pt-16 flex flex-col h-96">
      <h2 className="about_title hover:text-orange-400">CONOCIMIENTOS</h2>
      <div className="tecnologias-container">
        <animated.div className="tecnologias" style={props}>
          {techNames.slice().reverse().map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </animated.div>
      </div>
      <div className="tecnologias-container2">
        <animated.div className="tecnologias" style={props}>
          {techNames.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </animated.div>
      </div>
    </div>
  );
}

export default Techslider;
