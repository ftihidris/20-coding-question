// common_questions.dart

void main() {
  print(reverseString("hello")); // "olleh"
  print(isPalindrome("racecar")); // true
  print(factorial(5)); // 120
  print(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
  print(isPrime(13)); // true
}

// 1. Reverse a String
// This function reverses a given string by splitting it into a list, reversing the list, and joining it back.
String reverseString(String str) {
  return str.split('').reversed.join('');
}

// 2. Check for Palindrome
// A palindrome is a word that reads the same forward and backward.
bool isPalindrome(String str) {
  String reversed = reverseString(str);
  return str == reversed;
}

// 3. Find the Factorial using Recursion
// Factorial of n (n!) is the product of all numbers from 1 to n.
int factorial(int n) {
  if (n <= 1) return 1; // Base case: factorial of 0 or 1 is 1
  return n * factorial(n - 1); // Recursive call
}

// 4. Fibonacci Sequence
// Generates the first n numbers in the Fibonacci sequence.
List<int> fibonacci(int n) {
  List<int> fib = [0, 1];
  for (int i = 2; i < n; i++) {
    fib.add(fib[i - 1] + fib[i - 2]); // Sum of the last two numbers
  }
  return fib.sublist(0, n); // Returns only the first 'n' numbers
}

// 5. Check for Prime Number
// A prime number is only divisible by 1 and itself.
bool isPrime(int num) {
  if (num < 2) return false; // 0 and 1 are not prime
  for (int i = 2; i * i <= num; i++) {
    if (num % i == 0) return false; // If divisible, it's not prime
  }
  return true;
}

// 6. Find the Largest and Smallest Element in an Array
Map<String, int> findLargestAndSmallest(List<int> arr) {
  arr.sort(); // Sorting the array
  return {'smallest': arr.first, 'largest': arr.last};
}

// 7. Find the Second Largest Number in an Array
int findSecondLargest(List<int> arr) {
  arr = arr.toSet().toList(); // Remove duplicates
  arr.sort();
  return arr.length > 1 ? arr[arr.length - 2] : -1; // Return second largest
}

// 8. Remove Duplicates from an Array
List<int> removeDuplicates(List<int> arr) {
  return arr.toSet().toList(); // Convert to Set and back to List
}

// 9. Check if Two Strings Are Anagrams
bool areAnagrams(String str1, String str2) {
  List<String> sorted1 = str1.split('')..sort();
  List<String> sorted2 = str2.split('')..sort();
  return sorted1.join() == sorted2.join();
}

// 10. Find the First Non-Repeating Character in a String
String? firstNonRepeatingChar(String str) {
  Map<String, int> charCount = {};
  for (var char in str.split('')) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }
  for (var char in str.split('')) {
    if (charCount[char] == 1) return char;
  }
  return null;
}

// 11. Implement Bubble Sort
List<int> bubbleSort(List<int> arr) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 12. Binary Search Implementation
int binarySearch(List<int> arr, int target) {
  int left = 0, right = arr.length - 1;
  while (left <= right) {
    int mid = left + (right - left) ~/ 2;
    if (arr[mid] == target) return mid; // Found target
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}

// 13. Find the Missing Number in an Array of 1 to n
int findMissingNumber(List<int> arr, int n) {
  int sumN = (n * (n + 1)) ~/ 2;
  int sumArr = arr.reduce((a, b) => a + b);
  return sumN - sumArr; // Difference gives missing number
}

// 14. Find the Intersection of Two Arrays
// This function returns the common elements between two arrays.
List<int> findIntersection(List<int> arr1, List<int> arr2) {
  return arr1.toSet().intersection(arr2.toSet()).toList();
  // Convert both arrays to sets to remove duplicates
  // Find the intersection (common elements)
  // Convert back to a list and return the result
}

// 15. Reverse a Linked List
// A linked list consists of nodes, where each node has a value and a reference to the next node.
class Node {
  int value;
  Node? next;
  Node(this.value);
}

// This function reverses a linked list iteratively.
Node? reverseLinkedList(Node? head) {
  Node? prev, current = head, next;

  while (current != null) {
    next = current.next; // Store next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current node
    current = next; // Move current to next node
  }

  return prev; // New head of reversed linked list
}

// 16. Detect a Cycle in a Linked List
// Uses Floyd's Cycle Detection Algorithm (Tortoise and Hare approach).
bool hasCycle(Node? head) {
  Node? slow = head, fast = head;

  while (fast != null && fast.next != null) {
    slow = slow!.next; // Moves one step
    fast = fast.next!.next; // Moves two steps

    if (slow == fast) return true; // If they meet, there's a cycle
  }

  return false; // No cycle found
}

// 17. Implement a Stack Using Arrays
// A stack follows Last-In-First-Out (LIFO) order.
class Stack {
  List<int> stack = [];

  // Push an element onto the stack
  void push(int val) => stack.add(val);

  // Pop an element from the stack (removes and returns the last element)
  int? pop() => stack.isNotEmpty ? stack.removeLast() : null;

  // Check if the stack is empty
  bool isEmpty() => stack.isEmpty;
}

// 18. Implement a Queue Using Stacks
// A queue follows First-In-First-Out (FIFO) order, but we implement it using two stacks.
class Queue {
  Stack firstStack = Stack(); // Main stack for enqueue operations
  Stack secondStack = Stack(); // Temporary stack for dequeue operations

  // Enqueue (Insert an element into the queue)
  void enqueue(int val) {
    firstStack.push(val);
  }

  // Dequeue (Remove an element from the front of the queue)
  int? dequeue() {
    if (secondStack.isEmpty()) {
      // Move all elements from firstStack to secondStack to reverse order
      while (!firstStack.isEmpty()) {
        secondStack.push(firstStack.pop()!);
      }
    }
    return secondStack.pop(); // Remove and return the first element inserted
  }
}

// 19. Find the Longest Substring Without Repeating Characters
// Uses the sliding window technique to find the longest substring without duplicate characters.
int longestSubstring(String str) {
  int maxLength = 0, left = 0;
  Map<String, int> charMap = {}; // Stores the last index of characters

  for (int right = 0; right < str.length; right++) {
    String char = str[right];

    // If the character is already in the map and is within the current window, move left pointer
    if (charMap.containsKey(char) && charMap[char]! >= left) {
      left = charMap[char]! + 1;
    }

    charMap[char] = right; // Update the last index of the character
    maxLength = maxLength > (right - left + 1) ? maxLength : (right - left + 1);
  }

  return maxLength; // Return the length of the longest substring found
}

// 20. Solve the “Two Sum” Problem
// Given an array and a target sum, find two numbers that add up to the target.
List<int>? twoSum(List<int> arr, int target) {
  Map<int, int> numMap = {}; // Stores array values and their indices

  for (int i = 0; i < arr.length; i++) {
    int complement = target - arr[i]; // Calculate the complement

    if (numMap.containsKey(complement)) {
      // If complement exists in the map, return the indices of both numbers
      return [numMap[complement]!, i];
    }

    numMap[arr[i]] = i; // Store the current number with its index
  }

  return null; // Return null if no pair is found
}
