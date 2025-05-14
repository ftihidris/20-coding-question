import java.util.*;

public class CommonCodingProblems {
    
    // 1. Reverse a String
    public static String reverseString(String str) {
        // Use StringBuilder to reverse the string efficiently
        return new StringBuilder(str).reverse().toString();
    }

    // 2. Check for Palindrome (String remains same when reversed)
    public static boolean isPalindrome(String str) {
        String reversed = reverseString(str);
        return str.equals(reversed); // Compare original and reversed strings
    }

    // 3. Find the Factorial of a number using Recursion
    public static int factorial(int n) {
        if (n == 0 || n == 1) return 1; // Base case
        return n * factorial(n - 1); // Recursive case
    }

    // 4. Fibonacci Sequence: Print first n Fibonacci numbers
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        System.out.print(a + " " + b); // Print first two numbers
        for (int i = 2; i < n; i++) {
            int next = a + b;
            System.out.print(" " + next);
            a = b;
            b = next;
        }
        System.out.println();
    }

    // 5. Check if a number is Prime
    public static boolean isPrime(int n) {
        if (n < 2) return false; // Prime numbers are >= 2
        for (int i = 2; i <= Math.sqrt(n); i++) { // Check divisibility up to sqrt(n)
            if (n % i == 0) return false; // Not prime if divisible
        }
        return true;
    }

    // 6. Find the Largest and Smallest Element in an Array
    public static int[] findMinMax(int[] arr) {
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        return new int[]{min, max}; // Return both min and max values
    }

    // 7. Find the Second Largest Number in an Array
    public static int secondLargest(int[] arr) {
        int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > largest) { 
                second = largest; 
                largest = num; 
            } else if (num > second && num != largest) { 
                second = num; 
            }
        }
        return second;
    }

    // 8. Remove Duplicates from an Array using Set
    public static int[] removeDuplicates(int[] arr) {
        Set<Integer> set = new LinkedHashSet<>();
        for (int num : arr) set.add(num);
        return set.stream().mapToInt(i -> i).toArray(); // Convert back to array
    }

    // 9. Check if Two Strings Are Anagrams (same letters, different order)
    public static boolean areAnagrams(String str1, String str2) {
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    // 10. Find the First Non-Repeating Character in a String
    public static char firstNonRepeatingChar(String str) {
        Map<Character, Integer> countMap = new LinkedHashMap<>();
        for (char c : str.toCharArray()) {
            countMap.put(c, countMap.getOrDefault(c, 0) + 1); // Count occurrences
        }
        for (char c : str.toCharArray()) {
            if (countMap.get(c) == 1) return c; // First unique character
        }
        return '\0'; // Return null character if none found
    }

    // 11. Bubble Sort Algorithm
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) { // Iterate over array
            for (int j = 0; j < n - i - 1; j++) { // Compare adjacent elements
                if (arr[j] > arr[j + 1]) { // Swap if needed
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // 12. Binary Search (for sorted array)
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid; // Found the element
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1; // Element not found
    }

    // 13. Find the Missing Number in an Array (1 to n)
    public static int findMissingNumber(int[] arr, int n) {
        int sum = n * (n + 1) / 2; // Expected sum formula
        for (int num : arr) sum -= num; // Subtract elements from sum
        return sum; // Missing number
    }

    // 14. Find the Intersection of Two Arrays
    public static int[] arrayIntersection(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> result = new HashSet<>();
        for (int num : arr1) set1.add(num);
        for (int num : arr2) if (set1.contains(num)) result.add(num);
        return result.stream().mapToInt(i -> i).toArray();
    }

    // 15. Reverse a Linked List
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }
    public static ListNode reverseLinkedList(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = prev; // Reverse link
            prev = head;
            head = next;
        }
        return prev; // New head
    }

    // 16. Detect a Cycle in a Linked List (Floyd’s Cycle Detection)
    public static boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true; // Cycle detected
        }
        return false;
    }

    // 17. Implement a Stack Using Arrays
    static class Stack {
        private List<Integer> list = new ArrayList<>();
        public void push(int val) { list.add(val); }
        public int pop() { return list.isEmpty() ? -1 : list.remove(list.size() - 1); }
        public int peek() { return list.isEmpty() ? -1 : list.get(list.size() - 1); }
    }

    // 18. Implement a Queue Using Two Stacks
    static class QueueUsingStack {
        private Stack<Integer> stack1 = new Stack<>();
        private Stack<Integer> stack2 = new Stack<>();
        public void enqueue(int val) { stack1.push(val); }
        public int dequeue() {
            if (stack2.isEmpty()) while (!stack1.isEmpty()) stack2.push(stack1.pop());
            return stack2.isEmpty() ? -1 : stack2.pop();
        }
    }

    // 19. Find the Longest Substring Without Repeating Characters
    public static int longestUniqueSubstring(String s) {
        int maxLength = 0, left = 0;
        Map<Character, Integer> seen = new HashMap<>();
        for (int right = 0; right < s.length(); right++) {
            if (seen.containsKey(s.charAt(right))) left = Math.max(left, seen.get(s.charAt(right)) + 1);
            seen.put(s.charAt(right), right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    // 20. Solve the Two Sum Problem
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) return new int[]{map.get(target - nums[i]), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        System.out.println("Java Implementation of 20 Common Coding Problems");
    }
}