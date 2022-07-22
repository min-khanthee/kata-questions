/*
- The reduce method returns a single value
- Therefore I need to push that value to an array (the accumulator value)
- Check to see if the accumulator contains the current value in the array. If it does, exit
- If it doesn't, add that value to the array. 

*/

const removeDuplicateValues = (array) => {
  return array.reduce((accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value]
  }, [])
}
