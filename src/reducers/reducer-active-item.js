import ItemReducer from './reducer-items'
/*
 * All reducers get two parameters passed in, state and action that occurred
 * > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" if you want it set so that we don't throw an error when app first boots up or as below pass in the first item
export default function (state = ItemReducer()[0], action) {
  console.log('state', state)
  switch (action.type) {
    case 'ITEM_SELECTED': {
      return action.payload
    }
    default: {
      break
    }
  }
  return state
}
