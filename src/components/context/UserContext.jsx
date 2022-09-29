import { createContext, useContext, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserContext = createContext();

export const ContextUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [userState, setUserState] = useState(false);
    const [userLogged, setUserLogged] = useState({});

    const loginUser = async (username, password) => {
        const q = query(collection(db, "users"), where("email", "==", `${username}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const userFinded = { ...doc.data() };
            if(password === userFinded.password){
                setUserLogged(userFinded);
                setUserState(true);
            } else {
                console.log("error de usuario o contraseña")
            }
        });
    }
    
    const logoutUser = () => {
        setUserLogged({});
        setUserState(false);
    }
    
    return(
        <UserContext.Provider value={{loginUser, logoutUser, userState, userLogged}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;