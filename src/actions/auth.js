import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

const logout = (uid) => {
  return {
    type: 'LOGOUT'
  };
};

const startLogout = () => {
  return (dispatch) => {
    return firebase.auth().signOut();
  }
}

export { startLogin, startLogout, login, logout };