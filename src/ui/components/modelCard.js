import React from "react";

const ModelCard = ({ model }) => {
  return (
    <figure className="card">
      <img
        src={model.imgSrc}
        className="card-img-top"
        alt={`${model.type} ${model.category}`}
      />
      <div className="card-body">
        <h5 className="card-title text-center">
          {model.type} <span className="text-muted">{model.category}</span>
        </h5>
      </div>
    </figure>
  );
};

export default ModelCard;
