import { createStore, combineReducers,  compose, applyMiddleware } from 'redux'
import loginReducer from './loginReducer'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    login: loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function genereateStore() {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}