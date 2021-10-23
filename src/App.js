import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">D.i.c.t.i.o.n.a.r.y</header>
        <Dictionary />
        <footer className="text-center">
          <a
            href="https://frosty-knuth-2c3828.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
