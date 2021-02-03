const { expect } = require("chai"); 
const {
    findTheDuplicateNumber,
    longestSeriesOfConsecutive1s,
    sumOfNestedArray
} = require("./nossaDataSolutions");

describe('findTheDuplicateNumber', () => {
    it('returns duplicate when only duplicate is present', () => {
        expect(findTheDuplicateNumber([0, 0])).to.equal(0)
        expect(findTheDuplicateNumber([1, 1])).to.equal(1)
        expect(findTheDuplicateNumber([0, 1, 2, 3, 3, 4, 5])).to.equal(3)
        expect(findTheDuplicateNumber([0, 9, 7, 3, 91, 4, 6, 5, 2, 91])).to.equal(91)
    });
    it('longer array to test run time', () => {
        expect(findTheDuplicateNumber([4, 5, 6, 7, 8, 25, 22, 23, 9, 10, 11, 13, 14, 15, 16, 20, 21, 24, 25, 0, 1, 2, 3, 12, 17, 18, 19])).to.equal(25)
    });
});

describe('longestSeriesOfConsecutive1s', () => {
    it('returns length of longest consecutive series of 1s in binary representation', () => {
        expect(longestSeriesOfConsecutive1s(0)).to.equal(0)
        expect(longestSeriesOfConsecutive1s(11)).to.equal(2)
        expect(longestSeriesOfConsecutive1s(57)).to.equal(3)
        expect(longestSeriesOfConsecutive1s(999)).to.equal(5)
    });
    it('longNum', () => {
        expect(longestSeriesOfConsecutive1s(11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)).to.equal(6)
    });
});

describe('sumOfNestedArray', () => {
    it('returns sum of nested arr with appropriate weighting', () => {
        expect(sumOfNestedArray([1, 2, [1, [3, 3, [4]], 1]])).to.equal(63)
    });
    it('returns sum of nested arr with appropriate weighting', () => {
        expect(sumOfNestedArray([1, 2, 6, [1, 2, 6, [6, [8]]]])).to.equal(115)
    });
});