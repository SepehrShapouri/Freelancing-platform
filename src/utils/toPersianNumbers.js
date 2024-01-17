const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function toPersianNumbersWithComma(n) {
  const numWithCommas = numbersWithCommas(n);
  const persianNumbers = toPersianNumbers(numWithCommas);
  return persianNumbers;
}

function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
