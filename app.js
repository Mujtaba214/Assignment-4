const arrays = [
  42,
  true,
  "Hello, World!",
  {
    name: "John",
    age: 25,
    isStudent: false,
  },
  false,
  3.14,
  "JavaScript is fun!",
];

// Q1

let q1 = arrays.map((elements, index) => {
  return String(elements);
});
console.log(q1);

// Q2

let q2 = arrays.filter((e, i) => {
  return typeof e === "number";
});
console.log(q2);

// Q3

let q3 = arrays.forEach((e, i) => {
  console.log(typeof e);
});
console.log(q3);

// Q4

let q4 = arrays.reduce((a, b) => {
  return typeof b === "number" ? a + b : a;
}, 0);
console.log(q4);

//Q5

let q5 = arrays.find((e, i) => {
  return typeof e === "boolean";
});
console.log(q5);

// Q6

let q6 = arrays.findIndex((e, i) => {
  return typeof e === "object" && !Array.isArray(e);
});
console.log(q6);

//Q7

let q7 = arrays.some((e, i) => {
  return e >= 0;
});
console.log(q7);

// Q8

let q8 = arrays.every((e, i) => {
  return typeof e === "string";
});
console.log(q8);
