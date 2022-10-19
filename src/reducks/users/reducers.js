// actionsファイル内の全てのモジュールをimport.Actionsと言う名前をつけた
import * as Actions from "./actions";
import initialState from "../store/initialState";

// 第一引数は現在のstoreの状態または最初のstoreの状態
export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
