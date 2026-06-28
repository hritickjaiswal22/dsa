# The 4 Recognition Signals

### SIGNAL 1 — The word "subarray" or "substring"

  Any question about a contiguous portion of an array/string
  is a sliding window candidate. Always.


### SIGNAL 2 — Optimization over a contiguous range

  "Find the LONGEST / SHORTEST / MINIMUM / MAXIMUM
   subarray/substring that satisfies [condition]"

  The optimization keyword + contiguous range = very high probability.


### SIGNAL 3 — A constraint that acts as a "budget"

  "at most K distinct elements"
  "sum equals target"
  "at most K replacements allowed"
  "contains all characters of T"

  A budget you're tracking while scanning = sliding window.


### SIGNAL 4 — Brute force is O(n²) with nested loops

  If your first instinct is "outer loop picks start,
  inner loop picks end" → that's the O(n²) signal.
  Sliding window is the O(n) upgrade to that exact pattern.


# For Sliding Window problems the pointers will ALWAYS MOVE IN 1 SAME DIRECTION (TO RIGHT)

# Sliding Window — Solving Cheatsheet

## Before You Write a Single Line
1. FIXED or VARIABLE window?
   → Fixed  = K is given
   → Variable = expand/shrink based on condition

2. Write your VALID WINDOW condition in ONE sentence.
   → If you can't → you don't understand the problem yet. Stop.

3. Pick your DATA STRUCTURE.
   → Sum/count         → integer
   → Char frequency    → HashMap
   → Uniqueness        → HashSet
   → Max/Min in window → Monotonic Deque

## While Coding
4. RIGHT expands always.
   LEFT shrinks only when window is INVALID.
   → Each element enters & exits ONCE → O(n)
   → Nested left loop = you broke the pattern

5. Shrink loop order (never flip this):
   → Remove arr[left] from DS first
   → THEN left++

6. Record answer AFTER the shrink loop. Never inside it.

   right expands → while(invalid): shrink → ✅ record here

## Before You Submit
7. EDGE CASES — say these out loud:
   □ Empty input?
   □ K > array size?
   □ All elements identical?
   □ Negative numbers? (if yes → rethink if SW applies)

# The 10 essential Sliding Window patterns

### Pattern 1: Fixed-Size Window
### Pattern 2: Variable-Size Window (Expand + Shrink)
### Pattern 3: Sliding Window with Frequency Map
### Pattern 4: Longest / Shortest Substring With Condition
### Pattern 5: Exactly K / At Most K Distinct Elements
### Pattern 6: Window With Sum / Product Constraints
### Pattern 7: Sliding Window with Monotonic Queue (Deque) (VIMP)
### Pattern 8: Sliding Window + Prefix Sums
### Pattern 9: Sliding Window + Two Pointers
### Pattern 10: Dual Windows (Two Simultaneous Windows)

Optimization Notes 

https://gemini.google.com/app/12093636b4a82256?hl=en-IN