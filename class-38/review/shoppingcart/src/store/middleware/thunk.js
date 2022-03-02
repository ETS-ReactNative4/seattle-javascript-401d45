
// we want to wait for any asychronous stuff to finish and dispatch any resulting data
const thunk = (store) => (next) => (action) => {
  console.log('hello from Thunk');
  // if our action is a function, run the function and dispatch the results
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    // if our action is an object (which we assume most of the time) just call next on the action
    : next(action)
}

export default thunk;
