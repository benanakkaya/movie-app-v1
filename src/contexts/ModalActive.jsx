import React, { useState } from 'react'

export const ActiveContext = React.createContext();

 function ModalActive(props) {

    const [loginModalState,setLoginModalState] = useState(false);
    const [registerModalState,setRegisterModalState] = useState(false);
    const [editModalState,setEditModalState] = useState(false);
    const [addModalState,setAddModalState] = useState(false);

    const values={
        loginModalState,
        setLoginModalState,
        registerModalState,
        setRegisterModalState,
        editModalState,
        setEditModalState,
        addModalState,
        setAddModalState
    }

  return (
    <ActiveContext.Provider value={values}> 
        {props.children}
    </ActiveContext.Provider>
  )
}


export default ModalActive;
