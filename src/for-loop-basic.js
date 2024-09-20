const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let index = 0; index <= 3; index++) {
  numsZeroToThree.push(index)
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let index = 5; index <= 10; index++) {
  numsFiveToTen.push(index)
}
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let index = 0; index <= 6; index++) {
  if (index % 2 === 0) {
    evenNums.push(index)
  }
}
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let index = 3; index >= 0; index--) {
  countdown.push(index)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
