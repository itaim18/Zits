import ReactNativeRecoilPersist from "react-native-recoil-persist";
import {
  atom,
  AtomEffect,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { FirebaseUser, User } from "utils/types";

const persistAtom = ReactNativeRecoilPersist.persistAtom;

// isLoggedIn
export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const useUserIsLoggedIn = () => useRecoilValue(isLoggedIn);
export const useSetUserIsLoggedIn = () => useSetRecoilState(isLoggedIn);

export const userType = atom({
  key: "userType",
  default: "global",
});

export const useUserType = () => useRecoilValue(userType);
export const useSetUserType = () => useSetRecoilState(userType);

export const userTel = atom({
  key: "userTel",
  default: "+972544978899",
});

export const useUserTel = () => useRecoilValue(userTel);
export const useSetUserTel = () => useSetRecoilState(userTel);

// firebaseUser
export const firebaseUser = atom({
  key: "firebaseUser",
  default: null as FirebaseUser | null,
});

export const useUserFirebase = () => useRecoilValue(firebaseUser);
export const useSetUserFirebase = () => useSetRecoilState(firebaseUser);

export const emptyUser: User = {
  userType: "global",
  name: "userKing",
  address: "Yitzhak Sadeh St 6",
  city: "Tel Aviv-Yafo",
};
// user
export const user = atom({
  key: "user",
  default: emptyUser,
  effects_UNSTABLE: [persistAtom as AtomEffect<User | undefined>],
});

export const useUser = () => useRecoilValue(user);
export const useSetUser = () => useSetRecoilState(user);

// userName
const userName = selector({
  key: "userName",
  get: ({ get }) => {
    const userState = get(user);

    return userState?.name;
  },
});

export const useUserName = () => useRecoilValue(userName);

const userUid = selector({
  key: "userUid",
  get: ({ get }) => {
    const userState = get(user);

    return userState?.uid;
  },
});

export const useUserUid = () => useRecoilValue(userUid);
