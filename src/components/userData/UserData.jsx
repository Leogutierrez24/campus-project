import { React, useEffect } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const UserData = () => {
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
        <div>
            perfil
        </div>);
}

export default UserData;