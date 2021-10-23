import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault(event);
    alert(`Search for ${word} definition`);
  }

  function handleChange(event) {
    event.preventDefault(event);
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form class="row g-3" onSubmit={handleSubmit}>
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
