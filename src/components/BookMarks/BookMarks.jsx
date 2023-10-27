import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
const BookMarks = ({bookmarks,times}) => {
    return (
        <div className="md:w-1/3 mt-4">
            <div className="bg-gray-100 rounded px-6 py-2 mb-3">
            <h1 className="font-semibold text-blue-500 mb-4 text-2xl">Spent time on read : {times} min</h1>
            </div>
            <div className="bg-gray-100 rounded px-6 py-1">
            <h1 className="font-bold mb-4 text-2xl">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <BookMark bookmark={bookmark} key={bookmark.id}></BookMark> )
            }
            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    times: PropTypes.array,
  };
export default BookMarks;