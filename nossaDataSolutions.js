// Find the Duplicate 
// I assumed here there always would be a duplicate

const findTheDuplicate = (arr) => {
    const obj = {}
    for (i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            return arr[i]
        }
        else {
            obj[arr[i]] = arr[i]
        }
    }
}

//Longest Consecutive 1s
// I assumed here the input would always be an integer

const longestConsecutive1s = (num) => {
    let numInBinary = num.toString(2) //converts num to its binary represenation
    for (let i = numInBinary.length; i > 0; i--) {
        let regex = new RegExp(`1{${i}}`)
         if (regex.test(numInBinary)) {
            return i;
        }
    }
}

longestConsecutive1s(0)

module.exports = {
    findTheDuplicate,
    longestConsecutive1s
}