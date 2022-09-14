import { createContext, useContext, useState } from "react";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserContext = createContext();

export const ContextUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState(false);
    
    const checkUser = () => {
        
    }

    const loginUser = async (username, password) => {
        const q = query(collection(db, "users"), where("email", "==", `${username}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
           const userFinded = { ...doc.data() }
           if(password === userFinded.password){
                console.log("sesion iniciada")
           } else {
                console.log("error de usuario o contraseña")
           }
        })
    }
    return(
        <UserContext.Provider value={{checkUser, loginUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;