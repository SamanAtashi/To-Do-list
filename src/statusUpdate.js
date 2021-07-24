/* eslint-disable import/prefer-default-export */
import { globalIndex, resultFunction, list } from './index.js';

// eslint-disable-next-line import/prefer-default-export

export function statusUpdate(theItem) {
  const theId = parseInt(theItem.id.match(/\d+/g)[0]);

  if (list[theId - 1].completed === false) {
    list[theId - 1].completed = true;
  } else {
    list[theId - 1].completed = false;
  }
  localStorage.setItem(theId, JSON.stringify(list[theId - 1]));
}
