interface FormData {
  name: string;
  age: string;
  contact: string;
}

export const validateFormData = (data: FormData) => {
  const errors: any = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.age) errors.age = 'Age is required';
  else if (isNaN(Number(data.age))) errors.age = 'Age must be a number';
  if (!data.contact) errors.contact = 'Contact is required';
  return errors;
};

export const isFormValid = (errors: any) => {
  return Object.keys(errors).length === 0;
};
