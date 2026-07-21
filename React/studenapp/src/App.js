import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <main className="portal-container">

      <header className="portal-header">
        <span className="portal-label">STUDENT MANAGEMENT PORTAL</span>

        <h1>Welcome to Student Portal</h1>

        <p>
          A central space for accessing student-related information.
        </p>
      </header>

      <div className="portal-content">
        <Home />
        <About />
        <Contact />
      </div>

    </main>
  );
}

export default App;