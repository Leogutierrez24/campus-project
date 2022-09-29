import { useEffect, useState } from "react";
import { ContextUser } from "../context/UserContext";
import {collection, query, where, getDocs} from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const useGetUserData = () => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();
    useEffect(() => {
        const getUserInfo = async () => {
            if(userLogged.nFile !== undefined){
                setLoading(true);
                const q = query(collection(db, "userData"), where("id", "==", userLogged.nFile));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {    
                    setUserInfo({...doc.data()});
                });
            }
            setLoading(false);
        }
        getUserInfo();
    }, [userLogged]);
    return { userInfo, loading }
}