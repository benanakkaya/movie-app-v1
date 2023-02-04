import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import React, { useContext } from 'react'
import { ActiveContext } from '../contexts/ModalActive';
import {useFormik} from "formik"
import {UsersContext} from '../contexts/Users';
import { v4 as uuidv4 } from 'uuid';

function RegisterModal() {

    const {registerModalState,setRegisterModalState} = useContext(ActiveContext);

    const {registerUser} = useContext(UsersContext);


    const formik = useFormik({

        initialValues: {
            id:uuidv4(),
            userName: '',
            password: '',
            email: '',
            isAdmin: false,
        },
        onSubmit: (values) => {
            registerUser(values)
        },


    });

    return (

        
        <Modal isOpen={registerModalState} >
            <ModalHeader >Kayıt Ol</ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='userName' className='ms-2'>Kullanıcı Adı: </label>
                <input name='userName' style={{float:"right",marginRight:"8rem"}} onChange={formik.handleChange}></input> <br /><br />
                <label htmlFor='password' className='ms-2'>Parola: </label>
                <input name='password' type="password" style={{float:"right",marginRight:"8rem"}} onChange={formik.handleChange}></input> <br /><br /> 
                <label htmlFor='email' className='ms-2'>Email: </label>
                <input name='email' type="email" style={{float:"right",marginRight:"8rem"}} onChange={formik.handleChange}></input> <br /><br /> 

            
            <ModalFooter>
                <Button color="primary" type='submit'>
                    Kayıt Ol
                </Button>{' '}
                <Button color="secondary" onClick={() => setRegisterModalState(false)}>
                    İptal
                </Button>
            </ModalFooter>
            </form>
            </ModalBody>
        </Modal>
    )
}

export default RegisterModal;