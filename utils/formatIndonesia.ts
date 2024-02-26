import {locations} from "@/utils/nextAdd";

export function indonesianPhone(number: string) {
  // Add country code and remove leading zero
  const countryCode = "+62";
  const phoneNumber = countryCode + " " + number.slice(1, 5) + " " + number.slice(5);
  return phoneNumber;
}

export const formatNumber = (number: number) => {

  return new Intl.NumberFormat(locations, {
    notation: "standard",
    // compactDisplay: "short",
  }).format(number);
}
export const formatDate = (data?: Date | undefined | unknown) => {
  if (typeof data !== 'string') return 'Wrong Data Date'
  return new Date(data).toLocaleDateString(locations, {dateStyle: 'full'})
}
export const formatTime = (data?: string | undefined | unknown) => {
  if (typeof data !== 'string') return 'Wrong Data Time'
  return new Date(data).toLocaleTimeString(locations, {hour: '2-digit', minute: "2-digit"})
}
