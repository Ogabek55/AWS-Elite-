// function getCurrentFormattedTime(template) {
//   let date = new Date();

//   let MM = String(date.getMinutes()).padStart(2, "0");
//   let SS = String(date.getSeconds()).padStart(2, "0");
//   let HH = String(date.getHours()).padStart(2, "0");
//   let YY = String(date.getFullYear());

//   let formattedTime = template
//     .replace("${MM}", MM)
//     .replace("${SS}", SS)
//     .replace("${HH}", HH)
//     .replace("${YY}", YY);

//   return formattedTime;
// }

// let template = "${MM}.${SS}.${HH}.${YY}";
// console.log(getCurrentFormattedTime(template));

const birthDateInput = prompt(
  "Tug'ilgan kuningizni kiriting (masalan, 01.11.2011 yoki 2011-11-01)"
);
const birthDate = new Date(birthDateInput);
const endDate = new Date();
const timeTest = endDate - birthDate;

const secondsTest = timeTest / 1000;
const minutesTest = timeTest / (1000 * 60);
const hoursTest = timeTest / (1000 * 60 * 60);
const daysTest = timeTest / (1000 * 60 * 60 * 24);
const monthsTest = timeTest / (1000 * 60 * 60 * 24 * 31);
const yearsTest = timeTest / (1000 * 60 * 60 * 24 * 365);
const heartSpeedMinute = 70;
const heartTest = minutesTest * heartSpeedMinute;

console.log(`O'tgan soniyalar: ${secondsTest.toFixed(0)}`);
console.log(`O'tgan daqiqalar: ${minutesTest.toFixed(0)}`);
console.log(`O'tgan soatlar: ${hoursTest.toFixed(0)}`);
console.log(`O'tgan kunlar: ${daysTest.toFixed(0)}`);
console.log(`O'tgan oylar: ${monthsTest.toFixed(0)}`);
console.log(`O'tgan yillar: ${yearsTest.toFixed(0)}`);
console.log(`Nechqa marta yurak urishgi: ${heartTest.toFixed(0)}`);
