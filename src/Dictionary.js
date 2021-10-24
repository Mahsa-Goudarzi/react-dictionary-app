import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
    setLoaded(true);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //api documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f917000010000018c8ed677eb284d278334e350eb6a5026";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <div className="col-sm-10 ">
              <input
                type="search"
                className="form-control"
                placeholder="Search for a word"
                defaultValue={props.defaultWord}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-purple mb-3">
                Search
              </button>
            </div>
          </form>
          <small className="hint">i.e. paris, chocolate, purple, coding</small>
        </section>
        <Results result={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
