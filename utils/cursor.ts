export const cursor = (effect: any) => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      const { x, y } = e;
      const w = x < innerWidth / 2 ? x : innerWidth - x;
      const h = y < innerHeight / 2 ? y : innerHeight - y;

      if (effect.current) {
        effect.current.style.top = `${y}px`;
        effect.current.style.left = `${x}px`;
        effect.current.style.width = `${Math.min(w, h)}px`;
        effect.current.style.height = `${Math.min(w, h)}px`;
      }
    });
  }
};
