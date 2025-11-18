#### Example 1:

> **Input:** bits = [1,0,0]  
> **Output:** true  
> **Explanation:** The only way to decode it is two-bit character and one-bit character.
> So the last character is one-bit character.

#### Example 2:

> **Input:** bits = [1,1,1,0]  
> **Output:** false  
> **Explanation:** he only way to decode it is two-bit character and two-bit character.
> So the last character is not one-bit character.

## Constraints:

- `1 <= bits.length <= 1000`
- `bits[i]` is either `0` or `1`.
