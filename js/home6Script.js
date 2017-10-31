// Lottery

let minNumber = 70,
    maxNumber = 100,
    lottery = function() { return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; }
console.log(lottery());