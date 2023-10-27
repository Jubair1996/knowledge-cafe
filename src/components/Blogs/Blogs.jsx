import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleAddToBookmarks, handleTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
        
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleTime: PropTypes.func,
  };
export default Blogs;