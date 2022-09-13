import { React, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserData = () => {
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'users'));
            data.forEach((documento)=>{
                console.log(documento.data());
            });
        }

        getData();
    }, []);

    return(
        <div>
            perfil
        </div>);
}

export default UserData;