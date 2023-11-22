import React, { useEffect, useState } from "react";
import postService from "../services/post.service";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    postService.getAllPublicPosts().then(
      (response) => {
        console.log(response);
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div >
      <h1>Public Posts</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.title} className="card mb-2" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
          
        ))}
    </div>
  );
};

export default Home;
