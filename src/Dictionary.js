import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault(event);

    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    event.preventDefault(event);
    setWord(event.target.value.trim());
  }

  return (
    <div className="Dictionary">
      <form className="row g-3" onSubmit={search}>
        <div className="col-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Search for a word"
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-purple mb-3">
            Search
          </button>
        </div>
      </form>
      <Results result={result} />
    </div>
  );
}
