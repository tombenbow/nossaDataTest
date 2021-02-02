const { expect } = require("chai"); 
const {
    findTheDuplicate,
    longestConsecutive1s
} = require("./nossaDataSolutions");

describe('findTheDuplicate', () => {
    it('returns duplicate when only duplicate is present', () => {
        expect(findTheDuplicate([0, 0])).to.equal(0)
        expect(findTheDuplicate([1, 1])).to.equal(1)
        expect(findTheDuplicate([0, 1, 2, 3, 3, 4, 5])).to.equal(3)
        expect(findTheDuplicate([0, 9, 7, 3, 91, 4, 6, 5, 2, 91])).to.equal(91)
    });
    it('longer array to test run time', () => {
        expect(findTheDuplicate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25])).to.equal(25)
    });
    it('longer array to test run time', () => {
        expect(findTheDuplicate([4, 5, 6, 7, 8,  22, 23, 9, 10, 11, 13, 14, 15, 16, 20, 21, 24, 25, 0, 1, 2, 3, 12, 17, 18, 19, 25])).to.equal(25)
    });
});

describe('longestConsecutive1s', () => {
    it('returns length of longest consecutive series of 1s in binary representation', () => {
        expect(longestConsecutive1s(5)).to.equal(1)
        expect(longestConsecutive1s(11)).to.equal(2)
        expect(longestConsecutive1s(57)).to.equal(3)
        expect(longestConsecutive1s(999)).to.equal(5)
    });
    // it('longer number to test run time', () => {
    //     expect(longestConsecutive1s(175798392472858151581)).to.equal(???)
    // });
});