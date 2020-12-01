import { combineReducers } from "redux";
import appReducer from "./appReducer";
import homeReducer from "./homeReducer";

export const mainReducer = combineReducers({
    app: appReducer,
    home: homeReducer
});