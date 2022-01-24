'uses strict';

function armHandler(payload) {
  if (payload.warm) {
    console.log('Suns out guns out');
  } else {
    console.log('Im putting on a t shirt');
  }
}

module.exports = armHandler;
