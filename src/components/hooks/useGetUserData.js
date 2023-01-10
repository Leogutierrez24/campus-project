import { useEffect, useState } from "react";
import { ContextUser } from "../context/UserContext";
import {doc, getDoc} from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const useGetUserData = () => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();

    useEffect(() => {
        const getUserInfo = async () => {
            if(userLogged.nFile !== undefined){
                setLoading(true);
                let user = {};

                const docRef = doc(db, "userData", userLogged.nFile);
                const docSnapshot = await getDoc(docRef);
                if(docSnapshot.exists()){
                    user = {...userLogged, ...docSnapshot.data()};
                } else {
                    console.log("Something is wrong!!!");
                }
                setUserInfo(user);
            }
            setLoading(false);
        }

        getUserInfo();
    }, [userLogged]);

    return { userInfo, loading };
}