import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [times, setTimes] = useState(0)
  const handleAddToBookmarks = blog =>{
    console.log(blog)
    const addBookMarks = [...bookmarks,blog];
    setBookmarks(addBookMarks);
  }
  const handleTime = (time) =>{
    console.log("mark as time",time)
    setTimes(times + time)
  }
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <main className="md:flex gap-10 my-10">
          <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleTime ={handleTime}></Blogs>
          <BookMarks bookmarks={bookmarks} times={times}></BookMarks>
        </main>
      </div>
    </>
  );
}

export default App;
