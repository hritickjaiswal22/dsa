// https://gemini.google.com/app/140d41e6f9cb2a12?hl=en-IN

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

The realization: While "Exactly $K$" is unpredictable, "At Most $K$" is perfectly predictable (monotonic). If a window has $\le K$ distinct elements, shrinking it from the left will never make it invalid.
*/