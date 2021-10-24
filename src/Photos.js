import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-sm-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.tiny}
                      className="img-fluid rounded"
                      alt="a pic of the word"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
