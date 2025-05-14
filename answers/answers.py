"""
Common Algorithm Questions in Python
"""

# 1. Reverse a String
# This function takes a string and returns it reversed using slicing.
def reverse_string(s):
    return s[::-1]

# 2. Check for Palindrome
# A palindrome is a string that reads the same forward and backward.
# This function checks if the given string is a palindrome.
def is_palindrome(s):
    return s == s[::-1]

# 3. Find the Factorial (Recursive)
# The factorial of a number is the product of all positive integers up to that number.
# This function calculates factorial recursively.
def factorial(n):
    if n == 0 or n == 1:
        return 1  # Base case
    return n * factorial(n - 1)  # Recursive case

# 4. Fibonacci Sequence
# This function generates the first `n` numbers of the Fibonacci sequence.
def fibonacci(n):
    fib = [0, 1]  # First two numbers
    for i in range(2, n):  # Generate the sequence
        fib.append(fib[i - 1] + fib[i - 2])
    return fib[:n]

# 5. Check for Prime Number
# A prime number is a number greater than 1 that has no divisors other than 1 and itself.
def is_prime(n):
    if n < 2:
        return False  # Numbers less than 2 are not prime
    for i in range(2, int(n ** 0.5) + 1):  # Check divisibility up to sqrt(n)
        if n % i == 0:
            return False
    return True

# 6. Find the Largest and Smallest Element in an Array
# This function returns both the smallest and largest number in the given array.
def find_min_max(arr):
    return min(arr), max(arr)

# 7. Find the Second Largest Number in an Array
# This function finds the second largest number by sorting unique elements.
def second_largest(arr):
    unique_arr = list(set(arr))  # Remove duplicates
    unique_arr.sort(reverse=True)  # Sort in descending order
    return unique_arr[1] if len(unique_arr) > 1 else None  # Return second largest if available

# 8. Remove Duplicates from an Array
# This function removes duplicate values by converting the list to a set.
def remove_duplicates(arr):
    return list(set(arr))

# 9. Check if Two Strings Are Anagrams
# An anagram is when two words have the same characters but in a different order.
from collections import Counter
def are_anagrams(s1, s2):
    return Counter(s1) == Counter(s2)  # Compare character counts

# 10. Find the First Non-Repeating Character in a String
# This function finds the first character that appears only once.
def first_non_repeating(s):
    char_count = Counter(s)  # Count occurrences of each character
    for char in s:
        if char_count[char] == 1:  # Return first unique character
            return char
    return None  # Return None if all characters repeat

# 11. Implement Bubble Sort
# Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):  # Last i elements are already sorted
            if arr[j] > arr[j+1]:  # Swap if needed
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 12. Binary Search Implementation
# Binary search efficiently finds an element in a sorted array by repeatedly dividing it in half.
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid  # Element found
        elif arr[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    return -1  # Element not found

# 13. Find the Missing Number in an Array of 1 to n
# This function finds a missing number in a sequence by using the sum formula.
def missing_number(arr, n):
    return (n * (n + 1) // 2) - sum(arr)  # Expected sum - actual sum

# 14. Find the Intersection of Two Arrays
# This function finds the common elements between two lists.
def intersection(arr1, arr2):
    return list(set(arr1) & set(arr2))  # Use set intersection

# 15. Reverse a Linked List
# This function reverses a singly linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_linked_list(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next  # Store next node
        curr.next = prev  # Reverse the link
        prev, curr = curr, next_node  # Move forward
    return prev  # New head of reversed list

# 16. Detect a Cycle in a Linked List
# This function uses Floyd's cycle detection algorithm to detect a loop.
def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next  # Move slow by 1 and fast by 2
        if slow == fast:  # If they meet, there is a cycle
            return True
    return False  # No cycle detected

# 17. Implement a Stack Using Arrays
# A stack follows Last-In-First-Out (LIFO) principle.
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        self.stack.append(val)  # Add element to the stack

    def pop(self):
        return self.stack.pop() if self.stack else None  # Remove last element

    def peek(self):
        return self.stack[-1] if self.stack else None  # Return last element

    def is_empty(self):
        return len(self.stack) == 0  # Check if stack is empty

# 18. Implement a Queue Using Stacks
# A queue follows First-In-First-Out (FIFO) principle.
class QueueUsingStacks:
    def __init__(self):
        self.stack1 = []  # Primary stack
        self.stack2 = []  # Secondary stack for reversing order

    def enqueue(self, val):
        self.stack1.append(val)  # Push new element onto stack1

    def dequeue(self):
        if not self.stack2:  # If stack2 is empty, move elements from stack1
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop() if self.stack2 else None  # Pop from stack2

# 19. Find the Longest Substring Without Repeating Characters
# This function finds the length of the longest substring without repeating characters.
def longest_unique_substring(s):
    char_index = {}
    left, max_len = 0, 0
    for right in range(len(s)):
        if s[right] in char_index:
            left = max(left, char_index[s[right]] + 1)  # Move left pointer
        char_index[s[right]] = right  # Store index of current character
        max_len = max(max_len, right - left + 1)  # Update max length
    return max_len

# 20. Solve the "Two Sum" Problem
# Given an array and a target sum, this function finds two numbers that add up to the target.
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num  # Find the difference
        if complement in num_map:
            return [num_map[complement], i]  # Return the indices
        num_map[num] = i  # Store current number's index
    return []