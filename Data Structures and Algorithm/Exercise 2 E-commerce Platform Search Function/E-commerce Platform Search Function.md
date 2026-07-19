# Exercise 2: E-commerce Platform Search Function

## 1. Understanding Asymptotic Notation

### What is Big O Notation?

Big O notation is utilized to quantify an algorithm's efficiency. It shows how the time taken to execute or amount of memory consumed varies with the size of input data. It allows the developer to evaluate one algorithm against another in order to find the best one that solves the problem in the fastest manner.

Some common time complexities include:
- **O(1):** Constant time
- **O(log n):** Logarithmic time
- **O(n):** Linear time
- **O(n²):** Quadratic time

### Search Operation Scenarios

When performing searching algorithms, there are generally three cases to consider:

- Best Case: We find what we need at the beginning.
- Average Case: We discover the object somewhere in between.
- Worst Case: We only find the object at the end or fail to find it altogether.

In terms of performance:

In the case of linear search:
- Best Case: **O(1)**
- Average Case: **O(n)**
- Worst Case: **O(n)**

In the case of binary search:
- Best Case: **O(1)**
- Average Case: **O(log n)**
- Worst Case: **O(log n)**
---

## 2. Setup

In this activity, a class entitled the `Product` class was created to represent the various products sold on the online shop.

The attributes of the product include:
- Product ID
- Product Name
- Category of the Product

The products are stored by using:
- The unsorted list in case of Linear Search.
- The sorted list in case of Binary Search.

---

## 3. Implementation

The two search algorithms reviewed are:

### Linear Search
This is a straightforward search method that checks each item until it either finds the required item or runs out of items to check.

### Binary Search
In this search strategy, the item in question is compared with the middle item of the array. By doing so, the size of the array to be searched is continuously halved until the item is found or no more items can be checked.

The Java program consists of:
- The Product class which contains some information about the product.
- The LinearSearch class which carries out search in linear fashion.
- The BinarySearch class which carries out search in binary form.
- The Wrapper class which holds the main method and which is used to demonstrate the two searching methods.

---

## 4. Analysis

### Time Complexity Comparison

| Algorithm | Best Case | Average Case | Worst Case |
|-----------|-----------|--------------|------------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

### Comparison

**Linear Search**
- Easy to implement.
- Does not require the data to be sorted.
- Suitable for small datasets.
- Slower for large amounts of data.

**Binary Search**
- Much faster than Linear Search for large datasets.
- Requires the data to be sorted before searching.
- More efficient when frequent searches are performed.

---

## Conclusion

The exercise shows how to use Linear Search and Binary Search for e - commerce platforms. Linear Search is simple, and can be used when data is small or unsorted. In comparison, Binary Search is good for large sorted lists. E - commerce platforms have thousands of products, and hence Binary Search is better to use and gives better performance.