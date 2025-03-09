export const isValidEmail = (email) => {
  const regex = /^(?![_.])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex?.test(email);
};

export const isValidPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

export const removeAllSpaces = (str) => {
  return str.replace(/\s+/g, "");
};

export const convertMultipleSpacesToSingleSpace = (str) => {
  if (str?.length === 1 && str === " ") {
    return "";
  }
  const regex = /\s+/g;
  return str?.replace(regex, " ");
};
