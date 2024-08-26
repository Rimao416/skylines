export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number
) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? 80 : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        //   ease: "easeOut",
        //   ease: [0.6, 0.01, -0.05, 0.9],
        ease: [0.25, 0.25, 0.25, 0.85],
      },
    },
  };
};
