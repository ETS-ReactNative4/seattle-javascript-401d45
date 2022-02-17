# Class 29: Managing State with Reducers

## Annoucment

- Jacob will be missing next week.
  - Alex White will be here Mon / Tues.
  - JB will cover Wed - Fri.

## Warm Up

See Warm Up folder for details

## Review

More TDD!

- Mocking Hooks, maybe this is too much.

useEffect

- callback plus list of dependency pattern.
- Seems clunky.

Let's create a `<Form/>` with `<Results />`!

## Functional Reducers

We've used the reduce method on an array:

```javascript

let array = [1, 2, 3, 4];

// reducer is a way to functionally change state, without mutations

let initialState = 0;

function reducerFunction(state, item) {
  return state + item;
}


let updatedState = array.reduce(reducerFunction, intialState);

console.log(updatedState) // 10;
```

## useReducer Hook
