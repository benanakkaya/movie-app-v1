import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import React, { useContext, useEffect } from 'react'
import { ActiveContext } from '../contexts/ModalActive';
import {useFormik} from "formik"
import { MoviesContext } from '../contexts/Movies';

function EditModal() {

    const {editModalState,setEditModalState} = useContext(ActiveContext);
    const {editingMovie,setEditingMovie,editMovie} = useContext(MoviesContext);
    

    const formik = useFormik({

        initialValues: {
            id: editingMovie.id,
            title: editingMovie.title,
            description: editingMovie.description,
            category: editingMovie.category,
            rating: editingMovie.rating,
            year:editingMovie.year,
            orginalName:editingMovie.orginalName,
            image:editingMovie.image,
            link:editingMovie.link
        },
        onSubmit: () => {
            editMovie()
        },


    });

    const changeValue = (edit) => {
        setEditingMovie({...editingMovie, [edit.name] : edit.value})

    }



    return (

        
        <Modal isOpen={editModalState}  >
            <ModalHeader >Filmi Düzenle</ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='id' className='ms-2'>ID: </label>
                <input name='id' className='ps-1'  value={editingMovie.id} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='title' className='ms-2'>Başlık: </label>
                <input name='title' className='ps-1'  value={editingMovie.title} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='description' className='ms-2'>Açıklama: </label>
                <input name='description' className='ps-1'  value={editingMovie.description} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='image' className='ms-2'>Resim: </label>
                <input name='image' className='ps-1'  value={editingMovie.image} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='rating' className='ms-2'>Puan: </label>
                <input name='rating' className='ps-1'  value={editingMovie.rating} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='year' className='ms-2'>Yıl: </label>
                <input name='year' className='ps-1'  value={editingMovie.year} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='category' className='ms-2'>Kategori: </label>
                <input name='category' className='ps-1'  value={editingMovie.category} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />
                <label htmlFor='link' className='ms-2'>Youtube L.: </label>
                <input name='link' className='ps-1'  value={editingMovie.link} onChange={(event) => changeValue(event.target)} style={{width:"15rem",float:"right",marginRight:"8rem"}} ></input> <br /><br />


            
            <ModalFooter>
                <Button color="primary" type='submit'>
                    Düzenle
                </Button>{' '}
                <Button color="secondary" onClick={() => setEditModalState(false)}>
                    İptal
                </Button>
            </ModalFooter>
            </form>
            </ModalBody>
        </Modal>
    )
}

export default EditModal;