export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? "-30vh" : direction === "down" ? "-10vh" : 0,
      x: direction === "left" ? "10vw" : direction === "right" ? "-10vw" : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 3.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
