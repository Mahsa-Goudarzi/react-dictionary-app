import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Restuls(props) {
  if (props.result) {
    return (
      <div className="Results">
        <section>
          <h1>{props.result.word}</h1>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
