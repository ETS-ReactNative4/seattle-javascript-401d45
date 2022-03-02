// this is a function that logs details from the action provided

const logger = (store) => (next) => (action) => {

  console.log(action);
  console.log(store.getState());
  return next(action);

}

export default logger;
