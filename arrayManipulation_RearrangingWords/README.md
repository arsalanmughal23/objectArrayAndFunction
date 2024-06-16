# Gen Ai Cources | @Typescript | Assignment | Manipulating an Array
  > #typescript | Assignment 2 - Rearranging Words

> [!NOTE]
> ## How to Run Project
> Run the project by using given below command
  > ```
  > tsc && node .
  > ```

## Objective: 
  > Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
## Steps: 
  > ### 1. Scrambled Array:
  > - Start with an array of elements in a scrambled order, like:
  > - ```
  >   const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
  >   ```
  > ### 2. Modify the Array:
  > - Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
  >     - Convert non-strings (booleans, numbers) to strings if needed.
  >     - Split elements into character arrays (optional).
  >     - Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
  > ### 3. Output the Result:
  > - Use join() to combine elements back into a single string: "I am a student of GIAIC". ✔
