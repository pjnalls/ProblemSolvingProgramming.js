/** Carefully read (and/or listen to) the problem statement while assuming that there is something you do not know. */

/**
 *
 * READ PROBLEM STATEMENT:
 *
 * Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.
 *
 * (...? What are my initial questions about this problem statement?)
 */

/** Re-read (or ask the speaker to repeat) the problem statement as many times as you need to get the gist of what the problem statement requires. */

/**
 *
 * RE-READ TO "SEE INTO" PROBLEM STATEMENT:
 *
 * Given an array of integers (e.g., "[-1, 0, 3, 4, -3]"?) and a value (7?), determine if there are any two integers in the array whose sum (addition of only 2 integer values in the array?) is equal to the given value (7?).
 *
 * (Okay... so I've "got the gist" enough from re-reading this problem statement to start clearing the vagueness and ambiguity in the statement to derive unequivical meaning of what is required here.)
 *
 */

/** Formulate and ask your questions rather than assuming you get it or understand completely. If you're confused, be comfortable with your confusion as this gives you the opportunity to ask multiple questions until you have the clarity you need before start programming in confidence. */

/**
 *
 * FORMULATE AND ASK QUESTIONS FOR ASSURED CLARITY OF THE PROBLEM:
 *
 * Given an array of integers (e.g., "[-1, 0, 3, 4, -3]"?) and a value (e.g., 7?), determine if there are any two integers in the array whose sum (addition of only 2 integer values in the array?) is equal to the given value (7?).
 */

class TestCase {
  constructor(integers, value) {
    try {
      this.typeCheckIntegers(integers);
      this.typeCheckInteger(value);

      // Finally, define a `TestCase`'s `integers` and `value` properties.
      this.integers = [...integers];
      this.value = value;

      console.log(
        `[[${this.integers}], ${this.value}] was successfully defined as a \`TestCase\`.`
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  get data() {
    if (this.integers === undefined || this.value === undefined) {
      return undefined;
    } else return this;
  }

  typeCheckIntegers(integers) {
    let areAllIntegers = true;
    // Check if `integers` variable is of type `Array`.
    if (Array.isArray(integers)) {
      // Check if `integers` is empty.
      if (integers.length === 0) throw new Error("The given array is empty.");
      else {
        // Check to ensure all items in `integers` are indeed integers.
        integers.forEach((x) => {
          if (!Number.isInteger(x)) {
            areAllIntegers = false;
            return;
          }
        });
      }
    } else {
      throw new Error("The given array of `integers` is not of type `Array`.");
    }

    // If all items in `integers` are not all integers, then throw an error.
    if (!areAllIntegers) {
      throw new Error(
        "The given array of `integers` are not all actual integers."
      );
    }
  }

  typeCheckInteger(value) {
    // If `value` is not an integer, then throw an error.
    if (!Number.isInteger(value)) {
      throw new Error("The given `value` is not actual integer.");
    }
  }
}

const testCases = [];
/**
 * 1. "Given an array... and a value..." <= Does this mean we will always be guaranteed to receive the correct data types for our input data given for our algorithm?
 */

/**
 * 2. "Given an array of integers..." <= What is the largest and smallest integer values? Are these values positive, negative, and/or include zero, or any possible integer which can be represented in JavaScript?
 */

/** Start brainstorming an initial, basic solution with short-handed (or long-handed, if you have time,) comments of each step of the algorithm before you code as you explain each step in the algorithm, why you chose each step, and what each step does. */

// Sum of Two Integers
/* 1. Define a dictionary that:
 *    a. keeps items in `integers` visited in linear iterations.
 *    b. keeps it's "complementary operand" (e.g., 4 + 3 === 7, therefore 4 is 3's complementary operand) stored as an integer value.
 * 2. Iterate through `integers`, and:
 *    a. if the `value` data given - (minus) the current `x` integer value (or it's complementary operand) has been visited, return `true`.
 *    b. if the current `x` integer value has not been visited, store it in our dictionary and calculate its complementary operand and store it with the `x` integer as its key.
 *
 */

/** Start testing or event-storming your brainstorming for your solution with "what-if" scenarios. You can use your data inputs to test-drive the design of your basic solution — accounting for the base cases (from initial brainstormed solution), and then for the best, average, worst, and edge cases. */

// Base (Average, `true`) Case:
testCase = new TestCase([-1, 0, 3, 4, -3], 7).data;
testCase && testCases.push(testCase);

// Base (Average, `false`) Case:
testCase = new TestCase([-1, 0, 3, 4, -3], 9).data;
testCase && testCases.push(testCase);

// Base (Empty `Array`) Case:
testCase = new TestCase([], 9).data;
testCase && testCases.push(testCase);

// Base (`undefined` `integers`) Case:
testCase = new TestCase(undefined, 9).data;
testCase && testCases.push(testCase);

// Base (`undefined` `value`) Case:
testCase = new TestCase([-1, 0, 3, 4, -3], undefined).data;
testCase && testCases.push(testCase);

// Base (Explicitly `undefined`) Case:
testCase = new TestCase(undefined, undefined).data;
testCase && testCases.push(testCase);

// Base (Implicitly `undefined`) Case:
testCase = new TestCase().data;
testCase && testCases.push(testCase);

// Best `true` Case:
testCase = new TestCase([1, 1, 3, 4, -3], 2).data;
testCase && testCases.push(testCase);

// Best `false` Case:
testCase = new TestCase([1, 2], 2).data;
testCase && testCases.push(testCase);

// Worst Case:
testCase = new TestCase(
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  3
).data;
testCase && testCases.push(testCase);

// Min-max Integer (Edge) Case:
testCase = new TestCase(
  [Number.MIN_SAFE_INTEGER, 9, 1, -7, Number.MAX_SAFE_INTEGER],
  0
).data;
testCase && testCases.push(testCase);

// Non-`Array` Case:
testCase = new TestCase("a", 7).data;
testCase && testCases.push(testCase);

// Non-Integers in `Array` Case:
testCase = new TestCase(["a", "b", "c"], 7).data;
testCase && testCases.push(testCase);

// Non-Integer in `Array` Case:
testCase = new TestCase([2, 1, "c"], 7).data;
testCase && testCases.push(testCase);

// Non-Integer `value` Case:
testCase = new TestCase([1, 2, 7], "9").data;
testCase && testCases.push(testCase);

testCases.forEach((tc) => console.log(`[[${tc.integers}], ${tc.value}]`));

/** Summarize your completed, brainstormed, and (now) event-stormed solution to yourself and audibly to others to finalize your solution design until you and everyone else has clarity and now the confidence needed your your solution. */

/** 7. Finally, you can start confidently developing your solution and debug with your `testCases`. Remember, the more low-tech your means for programming (e.g., pencil and paper, Notepad, etc.) the harder it is, yet the better programmer you'll become.
 */

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
