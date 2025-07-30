<<<<<<< HEAD
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import userPreferenceReducer from './userPreference/userPreferenceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userPreference: userPreferenceReducer,
    product: productReducer,

});
=======
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import userPreferenceReducer from './userPreference/userPreferenceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userPreference: userPreferenceReducer,
    product: productReducer,

});
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
  export default rootReducer;