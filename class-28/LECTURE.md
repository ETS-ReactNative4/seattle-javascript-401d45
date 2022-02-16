# Class 28: Component Lifecycle

## Warm Up

Prompt: Given two binary trees with head reference as *T* and *S* having at most *N* nodes. Write a function to check if *S* is present as a subtree in *T*.

```javascript
recursiveCheckFunction(nodeOne, nodeTwo) {
 if(!nodeOne && !nodeTwo) {
  return true;
 }

 if (!nodeOne || !nodeTwo {
  return false;
 }

 if(nodeOne.value === nodeTwo.value) {
  let valueOne = recursiveCheckFunction(nodeOne.right, nodeTwo.right);
  let valueTwo = recursiveCheckFunction(nodeOne.left, nodeTwo.left);
  if(valueOne && valueTwo) {
   return true;
  }
}

```

## Review

* More tests!!
  * We can focus on some TDD.
* Deployment on GH-pages.
* Let's look through the PsuedoCode.

```java
ALGORITHM Mergesort(arr)
  DECLARE n <-- arr.length

  if n > 1
    DECLARE mid <-- n/2
    DECLARE left <-- arr[0...mid]
    DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
  DECLARE i <-- 0
  DECLARE j <-- 0
  DECLARE k <-- 0

  while i < left.length && j < right.length
    if left[i] <= right[j]
      arr[k] <-- left[i]
        i <-- i + 1
      else
        arr[k] <-- right[j]
        j <-- j + 1

      k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

* What are hooks?
 * something that hooks into the React API
 * `useState` lets us define some 'State'.
 * Why do we need state?
   * allows us use state, without creating a class.
   * Setting dynamic values, that React cares about.
 * What is a getter, and a setter?
    * getter:  reading values from state.
    * setter:  writing values to state.

## What is the Component Lifecycle

As a React Component / an Application gets used, things are potentially (we call these things side effects). Our component goes through a set events, starting from an instantiation or invocation.

## useEffect Hook

Takes 2 things, a callback, and a list of values that we want to watch for updates.
