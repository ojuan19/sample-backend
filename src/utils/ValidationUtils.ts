export const validatePatient = (patient: { name: string; age: number; ailment: string; }) => {
  if (!patient.name || patient.age <= 0 || !patient.ailment) {
    return false;
  }
  return true;
};