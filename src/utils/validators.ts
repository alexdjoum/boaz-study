
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassport = (value: string): boolean => {
  return value.trim().length >= 6;
};

export const validateForm = (
  fields: Record<string, string>
): boolean => {
  return Object.values(fields).every(isNotEmpty);
};
