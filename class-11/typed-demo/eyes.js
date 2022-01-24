'use strict';

function handleLight(payload) {
  if (payload.brightness > 60) {
    console.log('Closing Eyelids');
  } else {
    console.log('Opening eyelids');
  }
}

module.exports = handleLight;

