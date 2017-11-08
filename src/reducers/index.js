import {combineReducers} from 'redux'
import ItemReducer from './reducer-items'
import ActiveItemReducer from './reducer-active-item'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  items: ItemReducer,
  activeItem: ActiveItemReducer
})

export default allReducers
