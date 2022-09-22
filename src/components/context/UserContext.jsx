import { createContext, useContext, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserContext = createContext();

export const ContextUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState(false);
    const [userLogged, setUserLogged] = useState({});
    
    const checkUser = () => {
        
    }

    const logoutUser = () => {
        setUserLogged({});
        setUserState(false);
    }

    const getUserInfo = async (user) => {
        let userInfo = {}
        const q = query(collection(db, "userData"), where("id", "==", user.nFile));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            userInfo = { ...doc.data() };
        });
        return userInfo;
    }

    const loginUser = async (username, password) => {
        const q = query(collection(db, "users"), where("email", "==", `${username}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
            const userFinded = { ...doc.data() };
            const userInfo = await getUserInfo(doc.data());
            if(password === userFinded.password){
                setUserLogged({...userFinded, userInfo});
                setUserState(true);
            } else {
                console.log("error de usuario o contraseña")
            }
        });
    }
    
    return(
        <UserContext.Provider value={{checkUser, loginUser, logoutUser, userState, userLogged}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;