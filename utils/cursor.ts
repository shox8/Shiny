export const cursor = (effect: any) => {
  window.addEventListener("mousemove", (e: MouseEvent) => {
    const { x, y } = e;
    if (effect.current) {
      effect.current.style.top = `${y}px`;
      effect.current.style.left = `${x}px`;
      effect.current.style.width = `${
        x < innerWidth / 2 ? x : innerWidth - x
      }px`;
      effect.current.style.height = `${
        y < innerHeight / 2 ? y : innerHeight - y
      }px`;
    }
  });
};
