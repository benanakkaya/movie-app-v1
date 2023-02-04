import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ActiveContext } from './ModalActive';

export const UsersContext = React.createContext();

function Users(props) {

    const { setLoginModalState, setRegisterModalState } = useContext(ActiveContext);

    const [userList, setUserList] = useState([]);
    const [currentUserList, setCurrentUserList] = useState([]);
    const [login, setLogin] = useState(false);
    const [adminMode, setAdminMode] = useState(false);
    const [loginUsername, setLoginUsername] = useState("");

    useEffect(() => {
        var loginState = JSON.parse(localStorage.getItem("isLogin"));
        var adminState = JSON.parse(localStorage.getItem("isAdmin"));
        var usernameState = JSON.parse(localStorage.getItem("username"));
        if(loginState == null){
            loginState=false;
            adminState = false;
            usernameState="";
        }
        setLogin(loginState);
        setAdminMode(adminState);
        setLoginUsername(usernameState);
      },[]) 
    

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:3002/users");
            setUserList(res.data)
        }
        fetchUsers();
    }, [currentUserList])

    const loginControl = (values) => {
        const loginUser = userList.filter((user) => (
            user.userName === values.userName && user.password === values.password
        ))

        console.log(loginUser[0].isAdmin)

        if (loginUser[0].isAdmin === true) {
            setAdminMode(true);
            localStorage.setItem("isAdmin", "true");
        }

        if (loginUser.length === 1) {

            console.log(values.userName)
            setTimeout(() => {
                setLogin(true);
                setLoginModalState(false);
                setLoginUsername(`${values.userName}`)
                localStorage.setItem("isLogin", "true");
                localStorage.setItem("username", JSON.stringify(values.userName));
            }, 1500)
        }
    }

    const registerUser = async (values) => {
        await axios.post("http://localhost:3002/users", values);
        setCurrentUserList(...userList, values)
        setTimeout(() => {
            setRegisterModalState(false);
            console.log(userList)
        }, 1500)


    }





    const values = {
        userList,
        setUserList,
        login,
        setLogin,
        loginControl,
        adminMode,
        setAdminMode,
        registerUser,
        loginUsername,
        setLoginUsername
    }

    return (
        <UsersContext.Provider value={values}>
            {props.children}
        </UsersContext.Provider>
    )
}


export default Users;