# kata-questions🤺

A repo containing a variety of short kata questions to practice Javascript.

### 1. Pangram

#### Task:

Implement a Pangram check function. This checks to see that an input string contains all of the letters of the English alphabet.

For Example:

- console.log(isPangram('The quick Brown fox jumps over the lazy Dog )) => True
- console.log(isPangram('The quick fox is brown')) => False

### 2. Beat Boxer

#### Task:

Implement Beat Boxer - toBeatBox()

if the number has 3 as a factor, output 'doof'
if the number has 5 as a factor, output 'kapow'
if the number has 7 as a factor, output 'kaching'
otherwise, return the number

Example:
console.log(toBeatBox(15)) //doofkapow
console.log(toBeatBox(35)) //kapowkaching
console.log(toBeatBox(21)) //doofkaching
console.log(toBeatBox(2)) //2

### 3. isogram function

#### Task:

Implement an isogram check function. Isogram is a string where all letters are present only once.

Example:
console.log(isIsogram('ladygAgA')) // false
console.log(isIsogram('person')) //true

### 4. Leap Year function

#### Task:

implement function isLeapYear(). Leap years occur every four years (divisible by four).
Leap years do not occur in century years, unless it is divisible by 400.

Example:

console.log(isLeapYear("2020")) // true
console.log(isLeapYear("2018")) // false
console.log(isLeapYear("1700")) // false
console.log(isLeapYear("1600")) // true

### 5. Encode & Decode Function

#### Task:

implement functions that follow a run length encoding pattern. Run length encoding is a form of data compression, where consecutive data elements are replaced by just one data value and count of that value.

Example:

console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaooo
