import { combineReducers } from "redux";
import appReducer from "./appReducer";
import catalogueReducer from "./catalogueReducer";

export const mainReducer = combineReducers({
    app: appReducer,
    catalogue: catalogueReducer
});