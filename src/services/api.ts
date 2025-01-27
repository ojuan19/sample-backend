export const processPayment = async (amount: number) => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Payment of $${amount.toFixed(2)} processed successfully!`);
    }, 1000);
  });
};
