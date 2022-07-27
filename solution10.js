const topWord = (string) => {
  //turn string to lowercase and an array
  let words = string.toLowerCase('').split(' ')
  let wordDict = {}
  //create object to store words and the word's count. Do this in a key value pair
  for (let i = 0; i < words.length; i++) {
    if (wordDict.hasOwnProperty(words[i])) {
      wordDict[words[i]] = wordDict[words[i]] + 1
    } else {
      wordDict[words[i]] = 1
    }
  }

  //go through the object to find the word with the highest frequency.
  //in other words, return the key from the key value pair with the highest value
  let max = 0
  let maxKey = ''

  for (let word in wordDict) {
    if (wordDict[word] > max) {
      max = wordDict[word]
      maxKey = word
    }
  }
  //return the key
  return maxKey
}

console.log(topWord('The cat sat on the mat'))
console.log(topWord('The cat cat cat sat on the mat'))
console.log(topWord('The cat sat sat sat on the mat mat mat'))
