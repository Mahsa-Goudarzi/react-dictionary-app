import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
      <form class="row g-3" onSubmit={search}>
        <div class="col-auto">
          <input
            type="search"
            class="form-control"
            placeholder="Search for a word"
            onChange={handleChange}
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-purple mb-3">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
