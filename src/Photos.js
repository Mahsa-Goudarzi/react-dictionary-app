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
                <div className="col" key={index}>
                  <a href={photo.src.original}>
                    <img
                      src={photo.src.tiny}
                      className="img-fluid"
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
