import React from "react";

const ModelFilters = ({ props }) => {
  return (
    <div className="row mb-2">
      <div className="col-6 col-md-3">
        <label htmlFor="filterType" className="form-label">
          Tipo
        </label>
        <select
          name="filterType"
          className="form-select"
          onChange={props.onFilterTypeChange}
        >
          <option value={""}>Todos</option>
          {props.bikeTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="col-6 col-md-3">
        <label htmlFor="filterCategory" className="form-label">
          Categoría
        </label>
        <select
          name="filterCategory"
          className="form-select"
          onChange={props.onFilterCategoryChange}
        >
          <option value={""}>Todos</option>
          {props.bikeCategories.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ModelFilters;
