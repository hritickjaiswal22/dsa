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