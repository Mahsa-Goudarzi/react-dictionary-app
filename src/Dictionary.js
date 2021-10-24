import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
    setLoaded(true);
  }

  function search() {
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault(event);
    search();
  }

  function handleChange(event) {
    event.preventDefault(event);
    setWord(event.target.value.trim());
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>What's on you mind? Look it up!</label>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-10 ">
              <input
                type="search"
                className="form-control"
                placeholder="Search for a word"
                defaultValue={props.defaultWord}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-purple mb-3">
                Search
              </button>
            </div>
          </form>
          <small className="hint">i.e. paris, chocolate, purple, coding</small>
        </section>
        <Results result={result} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
