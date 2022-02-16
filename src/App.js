import logo from "./logo2.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> Your{" "}
          <strong className="dictionary">dictionary</strong> helper
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <a
            href="https://github.com/Bianca-Slavov/dictionary-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/biancaslavov/"
            target="_blank"
            rel="noreferrer"
          >
            Bianca Slavov
          </a>
        </footer>
      </div>
    </div>
  );
}
