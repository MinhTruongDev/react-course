import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducer/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor }
