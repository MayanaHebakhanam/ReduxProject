import { combineReducers } from "redux";
import icecreamReducer from "../redux/icecreams/icecreamReducer";
import cakeReducer from "../redux/cakes/cakeReducer";
import userReducer from "../redux/user/userReducer";

const rootReducer= combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user:userReducer
      
})
 
export default rootReducer