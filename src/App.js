import React, {createRef,useEffect, useState} from 'react'
import {Posts} from './Components/Posts'
import axios from 'axios'

 


const App = () => {
  
  let nb_posts_per_page = 10
  
  
  let page_links = [0,0,0,0,0,0,0,0,0,0].map((element) => createRef())
  
  const [posts, setPosts] = useState([])
  const [currentPagePosts, setCurrentPagePosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
        setCurrentPagePosts(res.data.slice(0, nb_posts_per_page))
        setLoading(false)
      })
    .catch((err) => {throw err})
   
  }, [])

  
  const HandlePagesClick = (event) => {
    event.preventDefault()

    let id = event.nativeEvent.target.id
    event.nativeEvent.path[1].classList.add("active")
    page_links.forEach((link) =>  {
      if(link.current.classList.contains(id))
        link.current.classList.add("active") 
      
      else
        link.current.classList.remove("active") 
    })
    setCurrentPagePosts(posts.slice(id*nb_posts_per_page - 10, id*nb_posts_per_page))
  }

  

  return (
    <div className="mx-5 mt-3">
      <h1 className="text-primary mb-4">My blog</h1>

      <div className="mb-4">
        <Posts loading={loading} currentPagePosts={currentPagePosts}/>       
      </div>
    
      <nav>
        <ul className="pagination pagination-md">
          <li className="page-item active 1"  ref={page_links[0]} onClick={HandlePagesClick}><a href="" className="page-link" id="1">1</a></li>
          <li className="page-item 2" ref={page_links[1]} onClick={HandlePagesClick}><a href="" className="page-link" id="2">2</a></li>
          <li className="page-item 3" ref={page_links[2]} onClick={HandlePagesClick}><a href="" className="page-link" id="3">3</a></li>
          <li className="page-item 4" ref={page_links[3]} onClick={HandlePagesClick}><a href="" className="page-link" id="4">4</a></li>
          <li className="page-item 5" ref={page_links[4]} onClick={HandlePagesClick}><a href="" className="page-link" id="5">5</a></li>
          <li className="page-item 6" ref={page_links[5]} onClick={HandlePagesClick}><a href="" className="page-link" id="6">6</a></li>
          <li className="page-item 7" ref={page_links[6]} onClick={HandlePagesClick}><a href="" className="page-link" id="7">7</a></li>
          <li className="page-item 8" ref={page_links[7]} onClick={HandlePagesClick}><a href="" className="page-link" id="8">8</a></li>
          <li className="page-item 9" ref={page_links[8]} onClick={HandlePagesClick}><a href="" className="page-link" id="9">9</a></li>
          <li className="page-item 10" ref={page_links[9]} onClick={HandlePagesClick}><a href="" className="page-link" id="10">10</a></li>
        </ul>
      </nav>

      
    </div>
  );
}

export default App;
