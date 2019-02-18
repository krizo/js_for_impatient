function pad(number, digits) {
  return String(number).padStart(digits, '0');
}

export function createDateString(date) {
  return pad(date.getFullYear(), 4) + '-' + pad(date.getMonth()+1, 2) + '-' + pad(date.getDate(), 2);
}