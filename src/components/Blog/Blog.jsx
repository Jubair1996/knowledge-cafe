import { BsBookmark } from "react-icons/bs";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmarks,handleTime }) => {
  const { id,cover, title,author_img,author,posted_date,reading_time, hashtags } = blog;
  return (
    <div>
      <img className="w-full rounded-md mt-4" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-4">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button onClick={()=> handleAddToBookmarks(blog)}><BsBookmark></BsBookmark></button>
        </div>
      </div>
      <h1 className="font-bold text-4xl mb-4">{title}</h1>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a className="mr-4" href="#">#{hash}</a></span> )
        }
      </p>
      <button onClick={() =>handleTime(reading_time,id)} className="underline text-blue-500 my-4">Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmarks: PropTypes.func,
  handleTime: PropTypes.func,
};
export default Blog;
