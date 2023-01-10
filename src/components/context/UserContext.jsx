import { createContext, useContext, useState } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserContext = createContext();

export const ContextUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState(false);
    const [userLogged, setUserLogged] = useState({});

    const loginUser = async (username, password) => {
        let dataError = false;
        const q = query(collection(db, "users"), where("email", "==", `${username}`));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.empty !== true){
            querySnapshot.forEach((doc) => {
                const userFinded = { ...doc.data() };
                if(password === userFinded.password){
                    setUserLogged(userFinded);
                    setUserState(true);
                } else {
                    dataError = true;
                }
            });
        } else {
            dataError = true;
        }

        return dataError;
    }
    
    const logoutUser = () => {
        setUserLogged({});
        setUserState(false);
    }

    const createUser = async (newUserData) => await addDoc(collection(db, "users"), newUserData);

    return(
        <UserContext.Provider value={{loginUser, logoutUser, createUser, userState, userLogged}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;