import React from "react";
import LoadMore from "../components/LoadMore";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  return (
    <div>
      <section>filters</section>
      <Catalog />
      <LoadMore />
    </div>
  );
};

export default CatalogPage;
