//Please find below the solutions. I have assumed the user would always follow the happy path + enter the correct data types.

//Problem 1: Find the Duplicate
//Space complexity: O(n) Time Complexity: O(n)
//Parameters: arrayOfIntegers (an array of integers)
// I assumed here there always would be a duplicate in the input array
const findTheDuplicateNumber = (arrayOfIntegers) => {
    const objectOfUniqueKeys = {}
    for (i = 0; i < arrayOfIntegers.length; i++) {
        if (objectOfUniqueKeys.hasOwnProperty(arrayOfIntegers[i])) {
            return arrayOfIntegers[i]
        }
        else {
            objectOfUniqueKeys[arrayOfIntegers[i]] = arrayOfIntegers[i]
        }
    }
}

//Problem 2: Longest series of consecutive 1s in the binary representation of a number
//Space complexity: O(n) Time Complexity: O(n)
//Parameters: int (an integer)
// I assumed here the input would always be an integer
const longestSeriesOfConsecutive1s = (int) => {
    let binaryRepresentationOfInt = int.toString(2) //this converts int to a string of its binary represenation
    for (let i = binaryRepresentationOfInt.length; i >= 0; i--) {
        let regex = new RegExp(`1{${i}}`)
         if (regex.test(binaryRepresentationOfInt)) {
            return i;
        }
    }
}

//Problem 3: Sum of Nested array
//Parameters: arrayOfNumbers (an array of numbers)
//Space complexity: O(log n) Time Complexity: O(n)
const sumOfNestedArray = (arrayOfNumbers) => {
    let sumTotal = 0;
    const loopThroughArr = (arrayOfNumbers, weighting) => {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (Array.isArray(arrayOfNumbers[i])) {
                loopThroughArr(arrayOfNumbers[i], (weighting * 2))
            }
            else {
                sumTotal += (arrayOfNumbers[i] * weighting)
            }
        }
    }
    loopThroughArr(arrayOfNumbers, 1)
    return sumTotal
}

module.exports = {
    findTheDuplicateNumber,
    longestSeriesOfConsecutive1s,
    sumOfNestedArray
}