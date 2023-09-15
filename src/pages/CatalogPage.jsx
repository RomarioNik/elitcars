import React, { useEffect, useState } from "react";
import LoadMore from "../components/LoadMore";
import Catalog from "../components/Catalog/Catalog";
import { getCars } from "../services/carApi";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBaseCars = async () => {
      try {
        setIsLoading(true);
        const data = await getCars(page);

        if (data.length < 8) {
          setIsLoading(false);
          setCars((prev) => [...prev, ...data]);
          return setIsButtonDisabled(true);
        }

        setIsLoading(false);
        setCars((prev) => [...prev, ...data]);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getBaseCars();
  }, [page]);

  const getMoreCars = async () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <section>filters</section>
      {cars.length > 0 && <Catalog data={cars} />}
      <LoadMore
        loadMore={getMoreCars}
        isLoading={isLoading}
        isButtonDisabled={isButtonDisabled}
      />
    </>
  );
};

export default CatalogPage;
