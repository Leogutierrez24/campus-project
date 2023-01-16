import { useState, useEffect } from "react";
import db from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ContextUser } from "../context/UserContext";

export const useGetInscription = (collection) => {
    const [document, setDocument] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { userLogged } = ContextUser();

    useEffect(() => {
        try{
            setLoading(true);
            const getDocument = async () => {
                if(userLogged.nFile){
                    const docRef = doc(db, collection, userLogged.nFile);
                    const docSnapshot = await getDoc(docRef);

                    if(docSnapshot.exists()) setDocument(docSnapshot.data().userInscription);
                    else console.log("The file doesn't exist!!!");
                    
                }
                setLoading(false);
            }

            getDocument();
        } catch(error){
            setError(error);
        }
    }, [userLogged.nFile, collection]);


    return { document, loading, error };
}