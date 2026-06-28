https://claude.ai/chat/8b701ad1-8b3e-40aa-a949-3a1a8dac414b

https://claude.ai/chat/5d02f042-d182-460b-8f43-373f06ee6bef

https://gemini.google.com/app/f777ba9fb2de6bbd?hl=en-IN

https://gemini.google.com/app/88825a79a841045d?hl=en-IN

https://claude.ai/chat/abbda0f6-ef10-44ec-8019-75e13caae454

https://leetcode.com/problems/binary-subarrays-with-sum/description/ // https://gemini.google.com/app/cb34de1d7ab7c859?hl=en-IN https://gemini.google.com/app/adda09fa37b6ded2?hl=en-IN

https://leetcode.com/problems/subarrays-with-k-different-integers/ // https://gemini.google.com/app/140d41e6f9cb2a12?hl=en-IN

/*
The 3-Step "In the Wild" Checklist for Exactly(k) = Atmost(k) - Atmost(k - 1)

1. It asks for a contiguous "Subarray", not a "Subsequence"
Why this matters: A sliding window only works if the elements are side-by-side. If the problem allows you to skip elements or reorder them (subsequences/subsets), this trick is instantly disqualified.

2. It asks you to COUNT total valid subarrays, rather than finding a Max/MinWhy this matters: 
If a problem asks for the maximum length of a subarray with exactly $K$ elements, you don't need this trick. You can just use a standard sliding window or hash map to find the longest one.
But if it asks, "How many total subarrays exist that satisfy X?", your brain should immediately think about accumulating window sizes (right - left + 1).

3. The constraint is "Exactly $K$" on a property that grows when you add elements
Why this matters: Think about what happens when you expand a sliding window to the right. Properties like the number of distinct integers, the sum of positive numbers, or the count of odd numbers can only stay the same or increase. They can never decrease when you add elements.

Because the property only goes up, an "Exactly $K$" constraint is incredibly awkward. If you have exactly $K$ elements, expanding further might break it, but shrinking from the left might also break it. You are trapped.

The realization: While "Exactly $K$" is unpredictable, "At Most $K$" is perfectly predictable (monotonic). If a window has $\le K$ distinct elements, shrin

https://leetcode.com/problems/sliding-window-maximum/description/ https://gemini.google.com/app/a8d8c8995b0410fa

https://gemini.google.com/app/a677d976657d0992

The Core Signal for Sliding window with monotonic deque: "Window + Extremum"

The absolute biggest giveaway is when a problem asks you to track an extremum (maximum or minimum) inside a moving range.

- The Blueprint: "Given an array and a window of size $K$, find the max/min for every single position of the window as it slides from start to end."
- Why a normal queue or heap fails: A regular queue doesn't give you $O(1)$ access to the max/min. A heap (Priority Queue) gives you the max/min in $O(1)$, but removing the element that slides out of the window takes $O(\log N)$. A monotonic deque does both insertions and extractions in $O(1)$ amortized time.

https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/submissions/2038144394/

https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ https://gemini.google.com/app/af8af3d17fe3b0c9

NOTE : WHEN YOU FACE A PROBLEM SAYING FIND MAX/MIN BY TAKING ELEMENTS FROM EITHER ENDS => INVERT THE STATEMENT + USE SLIDING WINDOW of fixed or variable size

# The fix: Constraint Extraction Drill

Before writing a single line of code on any unseen problem, answer these 5 questions out loud. Force yourself. Time limit: 3 minutes.

1. What is the input structure?
   (array of ints / string / binary array)

2. What am I optimizing?
   (max length / min length / count / exists?)

3. What is the constraint on a valid window?
   (sum ≥ k / at most k distinct / no repeats / 
    window_size - maxFreq ≤ k)

4. Is this constraint monotonic?
   (if I grow the window, does it only get worse/better 
    in one direction? YES → sliding window works)

5. What breaks my window?
   (this IS your shrink condition — write it explicitly)

If you can answer Q3 and Q5 before coding, you will solve the problem. Every time. The code is just mechanical after that.

https://gemini.google.com/app/19ddd786b37669a1