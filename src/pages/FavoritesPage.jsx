import React, { useEffect, useState } from "react";
import Catalog from "../components/Catalog/Catalog";
import { getAllCars } from "../services/carApi";
import Loader from "../components/Loader";

const FavoritesPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredCars = (cars, favorite) => {
    return cars.filter((item) => favorite.includes(item.id));
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCars();

        const storage = localStorage.getItem("carfavorite");
        if (storage) {
          const favorite = JSON.parse(storage);
          const cars = filteredCars(data, favorite);
          console.log(cars);
          setCars(cars);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCars();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {cars.length > 0 && !error && (
        <>
          <Catalog data={cars} favorite={true} carFavorites={true} />
        </>
      )}
    </>
  );
};

export default FavoritesPage;
