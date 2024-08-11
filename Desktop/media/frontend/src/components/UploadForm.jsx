import React, { useState } from 'react'
import axios from "axios"
import { BACKEND_URI } from '../config/constants'
function UploadForm() {
    const [name, setName] = useState('')
    const [videos, setVideos] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()

        let  formData = new FormData()
        for (let key in videos){
            formData.append("videos", videos(key))
        }
        formData.append("name", name)
        axios.post(`${BACKEND_URI}/api/v1/media/create`, formData).then((success)=>{
            alert("ok pour la creation")
        }).catch((error)=>{
            console.log(error)
            alert('une Error')
        })

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>  
            <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text"  name='name' id='name'
                 className='form-control'
                 onChange={(e) =>setName(e.target.setName)}
                  />
            </div>
            <div className="form-group">
                <label htmlFor="videos"></label>
                <input type="file"  name='videos' id='videos'
                 className='form-control'
                 onChange={(e) =>setName(e.target.files)}
                  />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Envoyer</button>

        </form>
    </div>
  )
}

export default UploadForm