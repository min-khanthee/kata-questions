/*
- Make sure string is lower case
- Need to turn it to an array to check individual characters
- use method (every) to see if all elements in the array meet the criteria.
- use method indexOf to find the first occurrence of that character

*/

const isIsogram = (string) => {
  const lowerCase = string.toLowerCase()

  const result = lowerCase.split('').every((value, index) => lowerCase.indexOf(value) === index)

  return result
}

console.log(isIsogram('ladygAgA'))
console.log(isIsogram('person'))

/*
Attempt 1:

const isIsogram = (string) => {

  let newString = [...new Set(string.toLowerCase().split('')) ].join('')

if (newString.length === string) {
  console.log(true)
} else {
  console.log(false)
}
  
}



*/
