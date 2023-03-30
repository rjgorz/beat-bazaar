import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"

function PlaylistForm ({addPlaylist}) {
    const history = useHistory()
    const formSchema = yup.object().shape({
      title: yup.string().required("Must enter a title"),
})
const formik = useFormik({
    initialValues: {
      title:'',
    },
    validationSchema: formSchema,
        onSubmit: (values) => {
          fetch("/playlists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values, null, 2),
          }).then((res) => {
            if(res.ok) {
              res.json().then(playlist => {
                addPlaylist(playlist)
                history.push(`/playlists/${playlist.id}`)
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
        <input type='submit' />
        </Form> 
        </div>
      )
}

export default PlaylistForm
const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:'Permanent marker';
    font-size:30px;
    color: black;
    input[type=submit]{
      background-color:black;
      color: white;
      height:40px;
      font-family: 'Permanent marker';
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `

