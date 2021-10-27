import React from "react";
// 
import ModelCard from "ui/components/modelCard";

const ModelsList = ({ models }) => {
  return (
    <div className="row">
      {models.map((m) => (
        <div className="col-12 col-md-3 col-lg-4 mb-4" key={m.id}>
          <ModelCard model={m} />
        </div>
      ))}
    </div>
  );
};

export default ModelsList;
