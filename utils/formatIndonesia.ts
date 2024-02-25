export function indonesianPhone(number: string) {
  // Add country code and remove leading zero
  const countryCode = "+62";
  const phoneNumber = countryCode + " " + number.slice(1, 5) + " " + number.slice(5);
  return phoneNumber;
}

// // Example usage:
// const originalNumber = "0123123";
// const indonesianNumber = indonesianPhone(originalNumber);
// console.log(indonesianNumber); // Output: +62 1231 23
