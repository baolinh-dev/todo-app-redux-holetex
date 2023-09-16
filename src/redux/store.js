import { legacy_createStore as createStore } from 'redux'; // tùy chỉnh phiên bản cho phù hợp 
import rootReducer from './reducer'; 
import { composeWithDevTools } from 'redux-devtools-extension' 

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancers);  

export default store;

