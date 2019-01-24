import { createStore } from 'redux';
import tabReducer from './reducers/main';
const store = createStore(tabReducer);
export default store;