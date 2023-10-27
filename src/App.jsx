import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <main className="md:flex gap-10 my-10">
          <Blogs></Blogs>
          <BookMarks></BookMarks>
        </main>
      </div>
    </>
  );
}

export default App;
