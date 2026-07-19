# Exercise 7: Financial Forecasting

## 1. Understanding Recursive Algorithms

### What is Recursion?

Recursion refers to a technique in which a function is able to solve a problem through self-referential calls. Instead of tackling the entire problem in one go, recursion breaks down a problem into smaller problems until it reaches the base case.

A recursive function has two important parts:
- **Base Case:** Stops the recursive calls.
- **Recursive Case:** Calls the same function with a smaller input.

### Advantages of Recursion
- Makes the code shorter and easier to understand.
- Helps solve problems that can be divided into smaller subproblems.
- Commonly used in tree traversal, searching, sorting, and mathematical calculations.

---

## 2. Setup

In this exercise, a recursive method is created to calculate the future value of an investment.

The method takes the following inputs:
- Present Value
- Growth Rate
- Number of Years

Future value can be calculated by the formula:

FV = PV * ( 1 + growth rate ) ^ number of periods

But with recursion:

FV(n) = FV(n - 1) * (1 + growth rate)

And the base case is:

FV(0) = PV

That means that the function will return present value.

---

## 3. Implementation

This program utilizes a recursion method called `futureValue()` implemented in Java. This method continues calling itself upon decrementing the number of years with each call until it arrives at the base case. After the base case has been reached, it goes back through the recursion and finally evaluates the future value.
---

## 4. Analysis

### Time Complexity

- **Best Case:** O(1), when the number of years is 0 and the base case is reached immediately.
- **Worst Case:** O(n), because the function makes one recursive call for each year.
- **Space Complexity:** O(n), as each recursive call is stored in the call stack until execution is completed.

### Optimization

While recursion simplifies the solution process and leads to a better understanding of the problem, it might not be optimal with big inputs. The performance can be enhanced by applying: 

- **Memoization:** Memorizing the results of already calculated computations.
- **Dynamic Programming:** Solving the issue iteratively instead of using recursion.
- **Formulaic Computation:** Spitting out the answer immediately through the formula which is the fastest way of solving this problem.

---

## Conclusion

This task shows that recursion can be applied in solving a financial forecasting problem. Despite the fact that recursion is straightforward and easy to comprehend, it is not the best method to solve problems with larger datasets, and it should preferably be replaced by dynamic programming or closed formula.
