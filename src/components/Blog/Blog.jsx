import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { cover, title,author_img,author,posted_date,reading_time } = blog;
  return (
    <div>
      <img className="w-full rounded-md " src={cover} alt="" />
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
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
      <h1 className="font-bold text-4xl mb-4">{title}</h1>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
