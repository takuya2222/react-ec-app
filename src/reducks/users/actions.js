export const SIGN_IN = "SIGN_IN";
export const signInActions = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
// ログアウトするときは初期の状態に戻すだけなので引数は持たない
export const signOutAcrtions = () => {
  return {
    type: "SIGN_OUT",　
    payload: {
      isSignIn: false,
      uid: "",
      username: "",
    },
  };
};
