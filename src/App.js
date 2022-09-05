import React, {useRef, useState, useMemo} from "react";
import './Stiles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";




function App() {

    const [filter, setFilter] = useState({sort: '', query: ''})

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


  const sortedPosts = useMemo(() => {
      if (filter.sort){
          return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
      }, [filter.sort, posts])

  const sortedAndsearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts])


  return (
    <div>
      <PostForm create = {createPost} />
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter = {filter}
            setFilter = {setFilter}
        />
      {sortedAndsearchedPosts.length !== 0
          ?
          <PostList remove = {removePost} posts={sortedAndsearchedPosts} title="Posts List"/>
          :
          <h1 style={{textAlign: "center"}}>
            Posts list is empty
          </h1>
      }
    </div>
  );
}

export default App;
