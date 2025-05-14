// 1. Write a function to reverse a given string.
function reverseString(str: string): string {
  // Convert string to an array, reverse the array, and join it back into a string
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// 2. Determine if a given string is a palindrome.
function isPalindrome(str: string): boolean {
  // Compare the original string with its reversed version
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// 3. Compute the factorial of a number using recursion.
function factorial(n: number): number {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) return 1;
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 4. Print the first n Fibonacci numbers.
function fibonacci(n: number): number[] {
  let fib = [0, 1]; // Start with the first two Fibonacci numbers
  for (let i = 2; i < n; i++) {
    // Sum of the two preceding numbers
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

// 5. Write a function to check if a number is prime.
function isPrime(n: number): boolean {
  if (n < 2) return false; // Prime numbers start from 2
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 6. Find the largest and smallest element in an array.
function findMinMax(arr: number[]): { min: number; max: number } {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(findMinMax([3, 1, 9, 4, 7])); // { min: 1, max: 9 }

// 7. Find the second largest number in an array.
function secondLargest(arr: number[]): number | null {
  let uniqueArr = [...new Set(arr)]; // Remove duplicates
  if (uniqueArr.length < 2) return null; // If there aren't at least two unique numbers, return null
  uniqueArr.sort((a, b) => b - a); // Sort in descending order
  return uniqueArr[1]; // Second element is the second largest
}

console.log(secondLargest([1, 2, 3, 4, 5])); // 4

// 8. Remove duplicates from an array.
function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)]; // Convert to Set and back to Array
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 9. Check if two strings are anagrams.
function isAnagram(str1: string, str2: string): boolean {
  // Sort the characters of both strings and compare
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

// 10. Find the first non-repeating character in a string.
function firstNonRepeatingChar(str: string): string | null {
  for (let char of str) {
    // Check if the character appears only once in the string
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null; // Return null if all characters repeat
}

console.log(firstNonRepeatingChar("aabbccde")); // "d"

// 11. Implement Bubble Sort.
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // Return sorted array
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

// 12. Implement Binary Search.
function binarySearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle index
    if (arr[mid] === target) return mid; // If found, return index
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1); // Adjust search range
  }
  return -1; // Return -1 if target not found
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2

// 13. Find the missing number in an array of 1 to n.
function findMissingNumber(arr: number[]): number {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2; // Sum of first n natural numbers
  return total - arr.reduce((sum, num) => sum + num, 0); // Subtract sum of array elements
}

console.log(findMissingNumber([1, 2, 3, 5])); // 4

// 14. Find the intersection of two arrays.
function arrayIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num)); // Return elements present in both arrays
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6])); // [2, 4]

// 15. Reverse a linked list.
class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    let next: ListNode | null = current.next; // Store next node
    current.next = prev; // Reverse the pointer
    prev = current; // Move previous forward
    current = next; // Move current forward
  }
  return prev; // New head of reversed list
}

// 16. Detect a cycle in a linked list using Floyd’s cycle-finding algorithm.
function hasCycle(head: ListNode | null): boolean {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    if (slow) slow = slow.next; // Move slow pointer one step
    fast = fast.next.next; // Move fast pointer two steps
    if (slow === fast) return true; // If they meet, there's a cycle
  }
  return false; // No cycle found
}

// 17. Implement a stack using an array.
class Stack {
  private items: number[] = [];

  push(element: number): void {
    this.items.push(element); // Add element to the top
  }

  pop(): number | undefined {
    return this.items.pop(); // Remove and return the top element
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// 18. Implement a queue using two stacks.
class Queue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  enqueue(element: number): void {
    this.stack1.push(element); // Push to first stack
  }

  dequeue(): number | undefined {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!); // Move elements from stack1 to stack2
      }
    }
    return this.stack2.pop(); // Pop from stack2
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1

// 19. Find the longest substring without repeating characters.
function longestUniqueSubstring(s: string): number {
  let seen = new Map();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (seen.has(s[right])) left = Math.max(seen.get(s[right]) + 1, left); // Update left pointer
    seen.set(s[right], right); // Store character index
    maxLength = Math.max(maxLength, right - left + 1); // Update max length
  }
  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3 ("abc")

// 20. Given an array and a target sum, find two numbers that add up to the target.
function twoSum(nums: number[], target: number): number[] | null {
  // Create a map to store numbers and their indices
  let map = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculate the required complement

    // Check if the complement exists in the map
    if (map.has(complement)) {
      return [map.get(complement)!, i]; // Return indices of the two numbers
    }

    // Store the current number and its index in the map
    map.set(nums[i], i);
  }

  return null; // Return null if no pair is found
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] -> nums[0] + nums[1] = 2 + 7 = 9
console.log(twoSum([3, 2, 4], 6)); // [1, 2] -> nums[1] + nums[2] = 2 + 4 = 6
console.log(twoSum([1, 5, 3], 8)); // [1, 2] -> nums[1] + nums[2] = 5 + 3 = 8
console.log(twoSum([1, 2, 3], 7)); // null -> No valid pair found
