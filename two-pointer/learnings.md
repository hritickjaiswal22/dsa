# Two Pointer — Pattern Taxonomy First

## Before picking problems, know there isn't one "two pointer" pattern — there are four distinct mechanics. Conflating them is the #1 junior mistake.

### Opposite-direction (converging)
### Fast-slow (Floyd's)
### Same-direction (read/write) (Both move forward, different speeds)
### Merge-style (dual array)

# How to Recognize the Pattern in an Interview (VIMP)

- Is the input a SORTED array/string, asking for a pair/triplet
satisfying a sum/difference condition?
        │
        ├── YES → Opposite-direction two pointer
        │
- Is it a LINKED LIST, asking about cycles, middle node,
or "Nth from end"?
        │
        ├── YES → Fast-slow pointer
        │
- Does it ask "modify array IN-PLACE, O(1) extra space,
without extra array"?
        │
        ├── YES → Same-direction read/write pointer
        │
- Are there TWO separate sorted arrays/lists to combine/compare?
        │
        ├── YES → Merge-style two pointer