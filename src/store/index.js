import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { NotificationReducer } from './Notification/Reducers'
import { UserReducer } from './User/Reducers'


const RootReducers = combineReducers({
  notification: NotificationReducer,
  users: UserReducer
})


export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(RootReducers, middleWareEnhancer);
}
