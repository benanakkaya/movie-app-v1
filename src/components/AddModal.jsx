import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useContext, useEffect, useState } from 'react'
import { ActiveContext } from '../contexts/ModalActive';
import { useFormik } from "formik"
import { MoviesContext } from '../contexts/Movies';
import { v4 as uuidv4 } from 'uuid';

function AddModal() {

    const { addModalState, setAddModalState } = useContext(ActiveContext);
    const { addingMovie, setaddingMovie, AddMovie } = useContext(MoviesContext);
    const [newMovieId, setNewMovieId] = useState(uuidv4());
    const [newMovieDate, setNewMovieDate] = useState(new Date().getTime());

    useEffect(() => {
        setNewMovieDate(new Date().getTime());
        setNewMovieId(uuidv4());
    }, [])


    const formik = useFormik({

        initialValues: {
            id: newMovieId,
            title: "",
            description: "",
            category: "",
            rating: "",
            year: "",
            orginalName: "",
            image: "",
            link:"",
            comments:[],
            addDate: newMovieDate //Sort for new add movie
        },
        onSubmit: (values) => {
            AddMovie(values);
        },


    });




    return (


        <Modal isOpen={addModalState}  >
            <ModalHeader >Film Ekle</ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor='id' className='ms-2'>ID: </label>
                    <input name='id' className='ps-1' value={newMovieId} onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='title' className='ms-2'>Başlık: </label>
                    <input name='title' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='orginalName' className='ms-2'>Orjinal İsmi: </label>
                    <input name='orginalName' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='description' className='ms-2'>Açıklama: </label>
                    <input name='description' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='image' className='ms-2'>Resim: </label>
                    <input name='image' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='rating' className='ms-2'>Puan: </label>
                    <input name='rating' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='year' className='ms-2'>Yıl: </label>
                    <input name='year' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='category' className='ms-2'>Kategori: </label>
                    <input name='category' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />
                    <label htmlFor='link' className='ms-2'>Youtube L. </label>
                    <input name='link' className='ps-1' onChange={formik.handleChange} style={{ width: "15rem", float: "right", marginRight: "8rem" }} ></input> <br /><br />



                    <ModalFooter>
                        <Button color="primary" type='submit'>
                            Ekle
                        </Button>{' '}
                        <Button color="secondary" onClick={() => setAddModalState(false)}>
                            İptal
                        </Button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default AddModal;