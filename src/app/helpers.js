export const textFormatter = (text) => {
  return text.replace(/([A-Z])/g, " $1").toUpperCase();
};
