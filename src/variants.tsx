export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => {
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
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };