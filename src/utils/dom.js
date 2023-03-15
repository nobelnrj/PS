export const isInViewport = (element, offset = 0) => {
  if (!element) return false;
  const top = element.getBoundingClientRect().top;
  return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
}
