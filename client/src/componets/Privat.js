import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import postService from '../services/post.service'
import authService from '../services/auth.service'

function Privat() {

    const [privatePosts, setPrivatePosts] = useState([])

    const navigate = useNavigate()
    useEffect(()=>{
        postService.getAllPrivatePosts().then((response)=>{
            setPrivatePosts(response.data)
        },(error)=>{
            console.log(error)
            if(error.response && error.response.status === 403){
                authService.logout();
                navigate('/login')
                window.location.reload()
            }
        })
    },[navigate])
  return (
    <div>
        <h1>Private Posts</h1>
      {privatePosts &&
        privatePosts.map((post) => (
            <div key={post.title} className="card mb-2" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Privat