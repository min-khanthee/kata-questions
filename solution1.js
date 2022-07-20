// Input string , output boolean value
// Convert string to lower case
// Make sure it is all one word
// Remove duplicates
// Check to see if the array matches alphabet variable

const string1 = 'The quick Brown fox jumps over the lazy DOG DOG DOG DOG'
const string2 = 'abcdefghijklmn'

const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
  const output = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')

  console.log(output === abc)
}

isPangram(string1)
