import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Restuls(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
