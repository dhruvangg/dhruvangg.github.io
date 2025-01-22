---
tags: 
    - post
title: "🚀 Master the Art of Sequential Task Execution in JavaScript 🛠️"
date: "2025-01-03"
description: "Ever wondered how to execute multiple tasks one after another in JavaScript without breaking a sweat? 🤔 Promises have you covered!"
layout: "posts.11ty.js"
---

Executing a series of tasks sequentially in JavaScript is a common requirement, especially when working with asynchronous operations. Promises provide an elegant way to achieve this. In this post, we’ll explore how to execute n tasks in series using Promise.

---

### Understanding the Problem

Suppose you have n tasks represented as an array of functions, where each function returns a Promise. The goal is to execute these tasks one after the other, ensuring each task completes before the next one starts.

---

### The Solution

To execute tasks in series:

1. Start with an initial resolved Promise.
2. Chain the tasks sequentially using .then().

---

### Code Implementation

Here’s an implementation of executing n tasks in series:

```
const tasks = [
    async () => {
        console.log('Task 1 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 1 Completed');
    },
    async () => {
        console.log('Task 2 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 2 Completed');
    },
    async () => {
        console.log('Task 3 Started');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Task 3 Completed');
    }
]

async function tasksSeries(tasks) {
    for (const task of tasks) {
        await task();
    }
}

tasksSeries(tasks)
    .then(() => console.log('All Tasks Completed'))
    .catch(err => console.error(err));
```

---

### Console Output

When you run the above code, the output will be:

```
Task 1 Started
Task 1 Completed
Task 2 Started
Task 2 Completed
Task 3 Started
Task 3 Completed
All Tasks Completed
```

---

### Why Use Promises?

* **Readability** : Using Promises with reduce makes the code clean and easy to follow.
* **Error Handling** : You can handle errors at a single point using .catch().

```
tasksSeries(tasks)
    .then(() => console.log('All tasks completed!'))
    .catch(error => console.error('An error occurred:', error));
```

---

### Real-World Applications

1. Sequential API calls where each depends on the previous result.
2. Chained animations or DOM updates.
3. Processing a batch of asynchronous file operations.

---

### Conclusion

Using Promises and reduce is a powerful way to execute tasks in series in JavaScript. It ensures clean, maintainable, and error-resilient code. By mastering this pattern, you can handle complex asynchronous workflows with ease.

Happy coding! 🚀
