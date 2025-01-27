export const validateEmail = (email: string): boolean => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};
