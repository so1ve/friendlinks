export const resolveElement = (element: string | Element) => {
  if (typeof element === "string") {
    return document.querySelector(element);
  }
  return element;
};
