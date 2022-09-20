import { React, useEffect } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import "./userProfile.scss";

const UserProfile = () => {
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'users'));
            data.forEach(async (documento) =>{
                let usuario = documento.data();
                let userData = await getDoc(usuario.userInfo);
                // usuario = {...userData};
                console.log(userData)
                console.log(usuario);
                // console.log(documento.data())
            });
        }
        getData();
    }, []);

    return(
        <div className="profile-container">
            perfil
        </div>);
}

export default UserProfile;