/*
- convert the string to a number
- check requirements using a terniary operator
*/

const isLeapYear = (string) => {
  const yearNum = Number(string)
  return yearNum % 100 === 0 ? yearNum % 400 === 0 : yearNum % 4 === 0
}

console.log(isLeapYear('2020')) // true
console.log(isLeapYear('2018')) // false
console.log(isLeapYear('1700')) // false
console.log(isLeapYear('1600')) // true
