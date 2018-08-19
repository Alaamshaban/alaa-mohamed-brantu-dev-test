import { combineReducers } from 'redux';
import productReducer from './product_reducer';

const rootReducer = combineReducers({
productsList:productReducer
});

export default rootReducer;
