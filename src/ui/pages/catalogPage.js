import React, { useCallback, useEffect, useState } from "react";
import useIsMounted from "ismounted";

//
import Bike from "features/bike";
//
import Loader from "ui/components/loader";
import ModelsList from "ui/components/modelsList";
import ModelFilters from "ui/components/modelFilters";

const CatalogPage = () => {
  // query
  const [isLoadingModels, setisLoadingModelsModels] = useState(true);
  const [models, setModels] = useState([]);

  const isMounted = useIsMounted();

  const getAllModels = useCallback(async () => {
    const responseModels = await Bike.getAllModels();
    if (isMounted.current) {
      setModels(responseModels);
      setisLoadingModelsModels(false);
    }
  }, [isMounted]);

  // filters

  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const onFilterTypeChange = (event) => {
    const newValue = event.target.value;
    setisLoadingModelsModels(true);
    setFilterType(newValue);
    setisLoadingModelsModels(false);
  };

  const onFilterCategoryChange = (event) => {
    const newValue = event.target.value;
    setisLoadingModelsModels(true);
    setFilterCategory(newValue);
    setisLoadingModelsModels(false);
  };

  const filteredModels = models
    .filter((m) => {
      if (filterType === "") return m;
      return m.type === filterType;
    })
    .filter((m) => {
      if (filterCategory === "") return m;
      return m.category === filterCategory;
    });

  const bikeTypes = models
    .map((m) => m.type)
    .filter((x, i, a) => a.indexOf(x) === i);

  const bikeCategories = models
    .map((m) => m.category)
    .filter((x, i, a) => a.indexOf(x) === i);

  const modelFiltersProps = {
    onFilterTypeChange,
    onFilterCategoryChange,
    bikeTypes,
    bikeCategories,
  };

  // on startup get all bike models

  useEffect(() => {
    getAllModels();
  }, [getAllModels]);

  return (
    <section role="article">
      <h1 className="text-center mb-5">Catálogo</h1>
      <ModelFilters props={modelFiltersProps} />
      <div className="mt-5 mb-5" title="modelsListContainer">
        {isLoadingModels && <Loader />}
        {!isLoadingModels && <ModelsList models={filteredModels} />}
      </div>
    </section>
  );
};

export default CatalogPage;
