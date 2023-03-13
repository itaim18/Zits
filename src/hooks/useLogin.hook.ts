import {useState} from 'react';
import {emptyUser, useSetUser} from 'state/userState';
// import {
//   // loginWithApple,
//   // loginWithFacebook,
//   loginWithGoogle,
//   logout,
// } from 'services/auth.service';

export const useLogin = () => {
  const setUser = useSetUser();
  const [isLoading, setisLoading] = useState(false);

  const loginGoogle = async () => {
    setisLoading(true);
    const firebaseUser = {user: null}; // await loginWithGoogle();
    if (!firebaseUser?.user) {
      setisLoading(false);
    }
    return firebaseUser;
  };

  const logoutUser = async () => {
    // await logout();
    setUser(emptyUser);
  };

  //   const loginFacebook = async () => {
  //     setisLoading(true);
  //     const user = await loginWithFacebook();
  //     await setLoggedInUser(user, LOGIN_PROVIDERS.FACEBOOK);
  //     setisLoading(false);
  //   };

  //   const loginApple = async () => {
  //     setisLoading(true);
  //     const user = await loginWithApple();
  //     await setLoggedInUser(user, LOGIN_PROVIDERS.APPLE);
  //     setisLoading(false);
  //   };
  return {
    loginGoogle,
    logoutUser,
    // loginApple,
    // loginFacebook,
    isLoading,
  };
};
