import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function EditSongForm({ updateSong }) {
    const [song, setSong] = useState(null);
    const [initialData, setInitialData] = useState({
        title: '',
        artist: '',
        genre: '',
        url: '',
    });
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        fetch(`/songs/${id}`)
            .then(r => r.json())
            .then(song => {
                setSong(song)
                formik.values.title = song.title
                formik.values.artist = song.artist
                formik.values.genre = song.genre
                formik.values.url = song.url
            })
    }, [])

    const formSchema = yup.object().shape({
        title: yup.string().required("Must enter a title"),
        artist: yup.string().required("Must enter an artist"),
        genre: yup.string(),
        url: yup.string()
    })

    const formik = useFormik({
        initialValues: initialData,

        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(`/songs/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((res) => {
                if (res.ok) {
                    res.json().then(updatedSong => {
                        updateSong(updatedSong)
                        history.push(`/songs`)
                    })
                }
            })
        },
    })

    return (
        <div className='App'>

            <Form onSubmit={formik.handleSubmit}>
                <label>Title </label>
                <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange} />

                <label> Artist </label>
                <input type='text' name='artist' value={formik.values.artist} onChange={formik.handleChange} />

                <label> Genre </label>
                <input type='text' name='genre' value={formik.values.genre} onChange={formik.handleChange} />

                <label> URL </label>
                <input type='text' name='url' value={formik.values.url} onChange={formik.handleChange} />

                <input type='submit' />
            </Form>
        </div>
    )

}

export default EditSongForm

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:'Permanent marker';
    font-size:30px;
    input[type=submit]{
      background-color:red;
      color: white;
      height:40px;
      font-family: 'Permanent marker';
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `
