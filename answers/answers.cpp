#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <stack>
#include <queue>
using namespace std;

// 1. Reverse a String
void reverseString(string &str) {
    reverse(str.begin(), str.end());  // Using built-in function to reverse the string
}

// 2. Check for Palindrome
bool isPalindrome(string str) {
    int left = 0, right = str.length() - 1;
    while (left < right) {
        if (str[left++] != str[right--]) return false;  // Check if characters match
    }
    return true;
}

// 3. Find the Factorial of a number using recursion
long long factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}

// 4. Fibonacci Sequence - Print first n Fibonacci numbers
void fibonacci(int n) {
    int a = 0, b = 1, c;
    for (int i = 0; i < n; i++) {
        cout << a << " ";  // Print current Fibonacci number
        c = a + b;  // Calculate next number
        a = b;
        b = c;
    }
    cout << endl;
}

// 5. Check for Prime Number
bool isPrime(int n) {
    if (n < 2) return false;  // 0 and 1 are not prime
    for (int i = 2; i * i <= n; i++) {  // Check divisibility up to sqrt(n)
        if (n % i == 0) return false;  // If divisible, it's not prime
    }
    return true;
}

// 6. Find the Largest and Smallest Element in an Array
void findMinMax(vector<int> arr, int &minVal, int &maxVal) {
    minVal = *min_element(arr.begin(), arr.end());  // Find smallest element
    maxVal = *max_element(arr.begin(), arr.end());  // Find largest element
}

// 7. Find the Second Largest Number in an Array
int secondLargest(vector<int> arr) {
    int largest = INT_MIN, secondLargest = INT_MIN;
    for (int num : arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

// 8. Remove Duplicates from an Array
vector<int> removeDuplicates(vector<int> arr) {
    unordered_set<int> uniqueElements(arr.begin(), arr.end());
    return vector<int>(uniqueElements.begin(), uniqueElements.end());  // Convert set back to vector
}

// 9. Check if Two Strings Are Anagrams
bool areAnagrams(string s1, string s2) {
    if (s1.length() != s2.length()) return false;
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    return s1 == s2;  // Check if sorted versions match
}

// 10. Find the First Non-Repeating Character in a String
char firstNonRepeatingCharacter(string str) {
    unordered_map<char, int> freq;
    for (char ch : str) freq[ch]++;  // Count frequency of each character
    for (char ch : str) {
        if (freq[ch] == 1) return ch;  // Return first character with frequency 1
    }
    return '_';  // Return '_' if no unique character found
}

// 11. Implement Bubble Sort
void bubbleSort(vector<int> &arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr[j], arr[j + 1]);  // Swap if elements are in wrong order
        }
    }
}

// 12. Binary Search Implementation (works on sorted arrays)
int binarySearch(vector<int> arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;  // Found target
        else if (arr[mid] < target) left = mid + 1;  // Search right half
        else right = mid - 1;  // Search left half
    }
    return -1;  // Not found
}

// 13. Find the Missing Number in an Array of 1 to n
int missingNumber(vector<int> arr, int n) {
    int expectedSum = n * (n + 1) / 2;  // Sum of first n numbers
    int actualSum = 0;
    for (int num : arr) actualSum += num;
    return expectedSum - actualSum;  // Missing number = expectedSum - actualSum
}

// 14. Find the Intersection of Two Arrays
vector<int> arrayIntersection(vector<int> arr1, vector<int> arr2) {
    unordered_set<int> set1(arr1.begin(), arr1.end());  // Store elements of first array in a set
    vector<int> intersection;
    for (int num : arr2) {
        if (set1.count(num)) {  // If element exists in set, it's in both arrays
            intersection.push_back(num);
            set1.erase(num);  // Remove to prevent duplicate results
        }
    }
    return intersection;
}

// 15. Reverse a Linked List (Using Iteration)
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}  // Constructor to initialize node
};

ListNode* reverseLinkedList(ListNode* head) {
    ListNode *prev = NULL, *next = NULL, *curr = head;
    while (curr) {
        next = curr->next;  // Store next node
        curr->next = prev;  // Reverse current node's pointer
        prev = curr;  // Move prev and curr one step forward
        curr = next;
    }
    return prev;  // New head of reversed list
}

// 16. Detect a Cycle in a Linked List (Floyd's Algorithm)
bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {  // Fast moves twice as fast as slow
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;  // If they meet, a cycle exists
    }
    return false;
}

// 17. Implement a Stack Using Arrays
class Stack {
    vector<int> stack;  // Internal vector to store stack elements
public:
    void push(int x) { stack.push_back(x); }  // Push element onto stack
    int pop() {
        if (stack.empty()) return -1;  // Return -1 if stack is empty
        int top = stack.back();  // Get last element
        stack.pop_back();  // Remove last element
        return top;
    }
};

// 18. Implement a Queue Using Stacks
class QueueUsingStacks {
    stack<int> s1, s2;  // Two stacks used for enqueue and dequeue operations
public:
    void enqueue(int x) { s1.push(x); }  // Push element into first stack

    int dequeue() {
        if (s2.empty()) {  // If second stack is empty, transfer elements from s1
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
        if (s2.empty()) return -1;  // Queue is empty
        int front = s2.top();  // Get front element
        s2.pop();
        return front;
    }
};

// 19. Find the Longest Substring Without Repeating Characters
int longestUniqueSubstring(string s) {
    unordered_map<char, int> seen;  // Store last index of each character
    int maxLength = 0, left = 0;
    for (int right = 0; right < s.size(); right++) {
        if (seen.count(s[right]))  // If character seen before, move left pointer
            left = max(left, seen[s[right]] + 1);
        seen[s[right]] = right;  // Update last index of character
        maxLength = max(maxLength, right - left + 1);  // Calculate max length
    }
    return maxLength;
}

// 20. Solve the "Two Sum" Problem
vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> indexMap;  // Store indices of elements
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];  // Find complement to reach target
        if (indexMap.count(complement))  // If complement exists, return indices
            return {indexMap[complement], i};
        indexMap[nums[i]] = i;  // Store index of current number
    }
    return {};  // Return empty if no solution found
}