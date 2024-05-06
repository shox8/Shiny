export const size = (size: number) => {
  if (size < 1048576) {
    return `${Math.ceil(size / 1024)} kb`;
  } else {
    const mb = Math.ceil(size / 1024) / 1024;
    return `${mb.toFixed(1)} mb`;
  }
};
