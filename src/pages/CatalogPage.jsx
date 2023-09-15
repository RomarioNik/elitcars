import React, { useEffect, useState } from "react";
import LoadMore from "../components/LoadMore";
import Catalog from "../components/Catalog/Catalog";
import { getCars } from "../services/carApi/getCars";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBaseCars = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getBaseCars();
    // console.log(data);
  }, []);

  return (
    <>
      <section>filters</section>
      {cars.length > 0 && <Catalog data={cars} />}
      <LoadMore />
    </>
  );
};

export default CatalogPage;
