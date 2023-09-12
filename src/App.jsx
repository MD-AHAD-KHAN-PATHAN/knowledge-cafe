import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const addReadingTime = (blog) => {
    const newReadingTime = blog.reading_time + readingTime;
    setReadingTime(newReadingTime);

    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !== blog.id);
    setBookmarks(removeBookmarks);
  }
  
  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs addToBookmarks={addToBookmarks} addReadingTime={addReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
      
    </>
  )
}

export default App
