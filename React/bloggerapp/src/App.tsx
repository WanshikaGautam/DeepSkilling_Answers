import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import BlogList from "./BlogList";

function App() {
  const showBook = true;
  const showBlog = true;

  let pageContent;

  if (showBlog) {
    pageContent = <BlogDetails />;
  } else {
    pageContent = <CourseDetails />;
  }

  return (
    <div>
      <h1>Blogger App</h1>

      {showBook && <BookDetails />}

      {pageContent}

      <BlogList />
    </div>
  );
}

export default App;