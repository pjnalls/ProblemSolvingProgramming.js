<h1 align="center"> 
  <br>
  <br>
  <b>Problem-Solving Programming</b> 
  <br>
  (PSP)
  <br>
  <b>Process</b>
  <br>
  <br>
  with
  <br> 
  <b>JavaScript</b>
  <br>
  <br>
  <br>
  <img 
    src="psp.js.png"
    alt="'Problem Solving Programming (PSP) Process with JavaScript' icon."
    width="240px"/>
  <br>
  <br>
</h1>

<h3 align="center">
<br>
<br>
A problem-solving programming (PSP) process for designing and developing JavaScript algorithms in less than 1 hour when given only a single statement for any given problem.
<br>
<br>
</h3>
<br>
<hr>
<br>
<br>

Whether you decide you want to become efficient at problem-solving programming to do well on your technical, code interviews, competitive programming, or simply for the sheer gratification of going from a single problem statement to a fully-functional, test-driven-developed JavaScript algorithm in under an hour without a need for an IDE (integrated-development environment), a good problem-solving process might be fundamental to any of the aforementioned endeavors.

Below are specific, detailed steps I like to keep in mind in a common PSP process in `example.js` with `testCases` given to us:

<br>

1. Carefully read (and/or listen to) the problem statement while assuming that *there is something you do not know*.

<br>

> "Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value."

<br>

```javascript
/**
 *
 * READ PROBLEM STATEMENT:
 *
 * (...? What are my initial questions about this problem statement?)
 */
```
<br>

2. Re-read (or ask the speaker to repeat) the problem statement as many times as you need to *get the gist* of what the problem statement requires.

<br>

> "Given an array of integers (e.g., "[-1, 0, 3, 4, -3]"?) and a value (7?), determine if there are any two integers in the array whose sum (addition of only 2 integer values in the array?) is equal to the given value (7?)".

<br>

```javascript
/**
 *
 * RE-READ TO "SEE INTO" PROBLEM STATEMENT:
 *
 * (Okay... so I've "got the gist" enough from re-reading this problem statement to start clearing the vagueness and ambiguity in the statement to derive unequivical meaning of what is required here.)
 *
 */
```
3. Formulate and ask your questions rather than assuming you *get it* or understand completely. If you're confused, *be comfortable with your confusion* as this gives you the opportunity to ask multiple questions until you have the *clarity* you need before start programming in *confidence*.

```javascript
/**
 *
 * FORMULATE AND ASK QUESTIONS FOR ASSURED CLARITY OF THE PROBLEM:
 *
 * Given an array of integers (e.g., "[-1, 0, 3, 4, -3]"?) and a value (e.g., 7?), determine if there are any two integers in the array whose sum (addition of only 2 integer values in the array?) is equal to the given value (7?).
 */

/**
 * 1. "Given an array... and a value..." <= Does this mean we will always be guaranteed to receive the correct data types for our input data given for our algorithm?
 */

/**
 * 2. "Given an array of integers..." <= What is the largest and smallest integer values? Are these values positive, negative, and/or include zero, or any possible integer which can be represented in JavaScript?
 */

/** 
 * etc.
 */
```
<br>

4. Start brainstorming an initial, basic solution with short-handed (or long-handed, if you have time,) comments of each step of the algorithm *before you code* as you explain each step in the algorithm, why you chose each step, and what each step does.

<br>

```javascript
// Sum of Two Integers
/* 1. Define a dictionary that:
 *    a. keeps items in `integers` visited in linear iterations.
 *    b. keeps it's "complementary operand" (e.g., 4 + 3 === 7, therefore 4 is 3's complementary operand) stored as an integer value.
 * 2. Iterate through `integers`, and:
 *    a. if the `value` data given - (minus) the current `x` integer value (or it's complementary operand) has been visited, return `true`.
 *    b. if the current `x` integer value has not been visited, store it in our dictionary and calculate its complementary operand and store it with the `x` integer as its key.
 *
 */
```

<br>

5. Start testing or *event-storming your brainstorming* for your solution with "what-if" scenarios. You can use your data inputs to test-drive the design of your basic solution — accounting for the base cases (from initial brainstormed solution), and then for the best, average, worst, and edge cases:

- Base (Average, `true`) Case
- Base (Average, `false`) Case
- Base (Empty `Array`) Case:
- Base (`undefined` `integers`) Case
- Base (`undefined` `value`) Case
- Base (Explicitly `undefined`) Case
- Base (Implicitly `undefined`) Case
- Best `true` Case
- Best `false` Case
- Worst Case
- Min-max Integer (Edge) Case
- Non-`Array` Case
- Non-Integers in `Array` Case
- Non-Integer in `Array` Case
- Non-Integer `value` Case

<br>

6. Summarize your completed, brainstormed, and (now) event-stormed solution to yourself and audibly to others to finalize your solution design until you and everyone else has clarity and now the confidence needed your your solution.

<br>

7. *Finally*, you can start confidently developing your solution and debug with your `testCases`. **Remember, the more low-tech your means for programming (e.g., pencil and paper, Notepad, etc.) the harder it is, yet the better programmer you'll become**.

<br>

```javascript
// Sum of Two Integers
const sumOfTwoIntegers = (integers, value) => {
  /* 1. Define a dictionary that:
   *    a. keeps items in `integers` visited in linear iterations.
   *    b. keeps it's "complementary operand" (e.g., 4 + 3 === 7, therefore 4 is 3's complementary operand) stored as an integer value.
   */
  foundComplementaries = false;
  const complementaryOperands = {};
  // 2. Iterate through `integers`, and:
  integers.forEach((x) => {
    //    a. if the `value` data given - (minus) the current `x` integer value (or it's complementary operand) has been visited, return `true`.
    if (complementaryOperands[`${value - x}`] === x) foundComplementaries = true;
    //    b. if the current `x` integer value has not been visited, store it in our dictionary and calculate its complementary operand and store it with the `x` integer as its key.
    if (complementaryOperands[`${x}`] === undefined) {
      complementaryOperands[`${x}`] = value - x;
    }
  });
  return foundComplementaries;
};

testCases.forEach((tc) => console.log(sumOfTwoIntegers(tc.integers, tc.value)));
```
<br>

As I've attempted to emphasize, programming at any given time is, in many cases, the last thing one should do given a process which is truly problem-solving-programming oriented.

...

**It's more important to truly understand a problem in order for the solution to "write-itself".**

<br>

<hr>

<br>
<br>