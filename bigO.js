//1. What is the Big O for this?
//1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//You want to find a playmate for your dog, preferably of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
//Someone yells - "I do, be happy to bring him over"
//
//============================================================================
  //O(i) - because it is selecting one object from the array.
//============================================================================


//2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//You want to find a playmate for your dog who is of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You start with the first person and ask him if he has a golden retriever. 
//He says no, then you ask the next person, and the next, and the next until you 
//find someone who has a golden or there is no one else to ask.
//============================================================================
//O(n) - because you are looping through the entire array.
============================================================================


2. Even or odd
What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
============================================================================
O(i) Only one action is ocurring, one time. No matter what the value of value is. 
============================================================================
3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
============================================================================
O(n^2) nested loops with linear iterations
============================================================================
4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
============================================================================
O(n) the function grows linearly based upon teh length of the array.
============================================================================
5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
============================================================================
O(n) linear search through the array
============================================================================
6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
============================================================================
O(n^2) - nested linear operations
============================================================================
7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
============================================================================
O(n) - linear loooping through  result array
on the first iteration, we push 0 to the end of the array.
on the second, we puhs 1
all others push the next value in the fibonacci sequence
============================================================================
8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, 
above. Assume that the input array is always sorted. What is the Big O of the following algorithm? 
Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
============================================================================
O(logn) the subset to search gets smaller after each iteration
============================================================================
9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
============================================================================
O(i)
============================================================================
10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
============================================================================
The function checks to see if the input number is not a prime number. O(n)
============================================================================
