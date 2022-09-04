import React, {useRef, useState} from "react";
import './Stiles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";


function App() {
  const [posts,setPosts] = useState([
    {id: 1, title: 'Java', body: 'Java'},
    {id: 2, title: 'Java', body: 'is'},
    {id: 3, title: 'Java', body: 'programming'},
    {id: 4, title: 'Java', body: 'language'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div>
      <PostForm create = {createPost} />
      {posts.length !== 0
          ?
          <PostList remove = {removePost} posts={posts} title="Posts List"/>
          :
          <h1 style={{textAlign: "center"}}>
            Posts list is empty
          </h1>
      }
    </div>
  );
}

export default App;
