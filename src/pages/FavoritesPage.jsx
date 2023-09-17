import React, { useEffect, useState } from "react";
// import LoadMore from "../components/LoadMore";
import Catalog from "../components/Catalog/Catalog";
import { getAllCars } from "../services/carApi";

const FavoritesPage = () => {
  const [cars, setCars] = useState([]);
  // const [carFavorites, setCarFavorites] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredCars = (cars, favorite) => {
    return cars.filter((item) => favorite.includes(item.id));
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        // setIsLoading(true);
        const data = await getAllCars();

        const storage = localStorage.getItem("carfavorite");
        if (storage) {
          const favorite = JSON.parse(storage);
          const cars = filteredCars(data, favorite);
          console.log(cars);
          setCars(cars);
        }

        // setIsLoading(false);
      } catch (error) {
        // setIsLoading(false);
        setError(error.message);
      }
    };

    getCars();
  }, []);

  return (
    <>
      {cars.length > 0 && !error && (
        <>
          <Catalog data={cars} favorite={true} carFavorites={true} />
          {/* <LoadMore isLoading={isLoading} isButtonDisabled={isButtonDisabled} /> */}
        </>
      )}
    </>
  );
};

export default FavoritesPage;
