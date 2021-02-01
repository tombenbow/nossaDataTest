Nossa Data Coding Test 1

### Set up
This is a coding test. Write your solutions in your preferred editor, test them, and then create a
pastebin or codepad link with your solution and email it to irina@nossadata.com.

### Requirements
Write a solution to the following problems in any programming language you prefer, and state
the time and space complexity of your solution in comments.

Document any other assumptions you make and provide code documentation, formatting and
styling like you would for production code.

You should try to avoid using libraries that are not very common in your solution. If there is a
library call that implements most or all of your solution with a single function call (e.g. using
sort() for a problem about sorting an array), avoid using that. If there is a basic auxiliary data
structure or algorithm you may want to use to aid your solution, you should make use of that.

State any additional assumptions you make in your comments.

### The problems
1. Given an array of integers where all but one are unique, find the duplicate number.
2. Given a number N, find the length of the longest consecutive sequence of 1s in its binary
representation.
3. Given an arbitrarily nested list of integers, calculate the weighted sum of all elements in the
list. If a list is nested once, the nested sum has a weight of 2^1. If a list is nested twice, the
nested sum has a weight of 2^2, etc.
Example: [1, 2, [1, [3, 3, [4]], 1]] should be calculated as 1 + 2 + 2* (1 + 2* (3 + 3 + 2*(4)) + 1))