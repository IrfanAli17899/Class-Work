import { createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";

const Store = createStore(rootReducer,{});
export default Store;
