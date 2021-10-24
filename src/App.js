import "./App.css";
import Dictionary from "./Dictionary";
import "@fontsource/nothing-you-could-do";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          D<span className="text-danger">.</span>i
          <span className="text-primary">.</span>c
          <span className="text-warning">.</span>t
          <span className="text-danger">.</span>i
          <span className="text-warning">.</span>o
          <span className="text-primary">.</span>n
          <span className="text-danger">.</span>a
          <span className="text-primary">.</span>r
          <span className="text-warning">.</span>y
        </header>
        <Dictionary defaultWord="purple" />
        <footer className="text-center">
          <a
            href="https://github.com/Mahsa-Goudarzi/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Mahsa Goudarzi,{" "}
          <a
            href="https://frosty-knuth-2c3828.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
