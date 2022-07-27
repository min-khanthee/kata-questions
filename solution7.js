const topWord = (string) => {
  let wordDict = {}

  let words = string.toLowerCase('').split(' ')

  for (let i = 0; i < words.length; i++) {
    if (wordDict.hasOwnProperty(words[i])) {
      wordDict[words[i]] = wordDict[words[i]] + 1
    } else {
      wordDict[words[i]] = 1
    }
  }

  let word = ''
  let count = 0

  for (let [key, value] of Object.entries(wordDict)) {
    if (count < value) {
      word = key
      count = value
    }
  }
  return word
}

console.log(topWord('The cat sat on the mat'))
