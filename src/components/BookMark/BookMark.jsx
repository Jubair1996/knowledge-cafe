import PropTypes from "prop-types";
const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="text-xl font-bold bg-white p-4 rounded-lg mb-4">
            <h1>{title}</h1>
        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.array,
  };
export default BookMark;