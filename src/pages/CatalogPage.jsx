import React, { useEffect, useState } from "react";
import LoadMore from "../components/LoadMore";
import Catalog from "../components/Catalog/Catalog";
import { getCars } from "../services/carApi";
import { limitOfCards } from "../constants/limitOfCards";
import Loader from "../components/Loader";
import Filters from "../components/Filters";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [carFavorites, setCarFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBaseCars = async () => {
      try {
        setIsLoading(true);
        const storage = localStorage.getItem("carfavorite");
        if (storage) {
          setCarFavorites(JSON.parse(storage));
        }

        const data = await getCars(page);

        if (data.length < limitOfCards) {
          setIsLoading(false);
          setCars((prev) => [...prev, ...data]);
          setIsButtonDisabled(true);
          return;
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

  const getFilteredCars = (fiteredCars) => {
    setCars(fiteredCars);
    setIsButtonDisabled(true);
  };

  return (
    <>
      <Filters getFilteredCars={getFilteredCars} />
      {isLoading && <Loader />}
      {cars.length > 0 && !error && (
        <>
          <Catalog data={cars} favorite={false} carFavorites={carFavorites} />
          <LoadMore
            loadMore={getMoreCars}
            isLoading={isLoading}
            isButtonDisabled={isButtonDisabled}
          />
        </>
      )}
    </>
  );
};

export default CatalogPage;
