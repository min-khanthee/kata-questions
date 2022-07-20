/*
Create empty string to append the words

Check to see if num is divisible by 3
      - Use %, and if remainder === 0, then add "doof"

    - Apply the same logic for each scenario. 

  If it is a number, return the number
      
*/

const toBeatBox = (num) => {
  let result = ''

  if (num % 3 === 0) result += 'doof'
  if (num % 5 === 0) result += 'kapow'
  if (num % 7 === 0) result += 'kaching'

  return result || num
}

console.log(toBeatBox(25))
console.log(toBeatBox(35))
console.log(toBeatBox(21))
console.log(toBeatBox(1))
