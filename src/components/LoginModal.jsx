import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import React, { useContext } from 'react'
import { ActiveContext } from '../contexts/ModalActive';
import {useFormik} from "formik"
import {UsersContext} from '../contexts/Users';

function LoginModal() {

    const {loginModalState,setLoginModalState} = useContext(ActiveContext);

    const {loginControl} = useContext(UsersContext);


    const formik = useFormik({

        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: (values) => {
            loginControl(values)
        },


    });

    return (

        
        <Modal isOpen={loginModalState} >
            <ModalHeader >Giriş Yap</ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='userName' className='ms-2'>Kullanıcı Adı: </label>
                <input name='userName' style={{float:"right",marginRight:"8rem"}} onChange={formik.handleChange}></input> <br /><br />
                <label htmlFor='password' className='ms-2'>Parola: </label>
                <input name='password' type="password" style={{float:"right",marginRight:"8rem"}} onChange={formik.handleChange}></input> <br /><br /> 

            
            <ModalFooter>
                <Button color="primary" type='submit'>
                    Giriş Yap
                </Button>{' '}
                <Button color="secondary" onClick={() => setLoginModalState(false)}>
                    İptal
                </Button>
            </ModalFooter>
            </form>
            </ModalBody>
        </Modal>
    )
}

export default LoginModal;