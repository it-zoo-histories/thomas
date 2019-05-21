import { createStore, applyMiddleware } from 'redux';
import rootReducer from './ReducerEntry';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk, logger))

  if (module.hot) {
    module.hot.accept('./ReducerEntry', () => {
      const nextRootReducer = require('./ReducerEntry')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
