import { createStore as reduxCreateStore, combineReducers } from "redux";

// reducerごと分割して、stateを管理しやすくする。それをここにまとめてimportする
// import { ProductsReducer } from "../products/reducers";
import { usersReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    // 分割したReducersをまとめるのがcombineReducers
    combineReducers({
      // products: ProductsReducer,
      users: usersReducer,
    })
  );
}
