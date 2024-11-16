import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories,setCategories]=useState([]);


  // register user with email pass
  const registerUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // register user with google and github
  const singUpWithApp = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const profileUpdate = (name, image) => {
    setIsLoading(true);
    return updateProfile(user, {
      displayName: name ? name : user.displayName,
      photoURL: image ? image : user.photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      // console.log("logged from :", currentUser);
      setUser(currentUser);
      setIsLoading(false);

      if(currentUser){
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser,{withCredentials: true})
        .then(res => {
         console.log(res.data);
        })
      }
      else{
        axios.post('${import.meta.env.VITE_API_URL}/logout',loggedUser,{withCredentials: true})
        .then(res => {
         console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const provideInfo = {
    user,
    isLoading,
    registerUser,
    singUpWithApp,
    loginUser,
    profileUpdate,
    logout,
    categories,
    setCategories
  };
  return (
    <AuthContext.Provider value={provideInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
