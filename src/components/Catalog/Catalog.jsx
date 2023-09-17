import { useState } from "react";
import CardCatalog from "../CardCatalog";
import { Wrapper, CardList } from "./Catalog.styled";

const Catalog = ({ data, favorite, carFavorites }) => {
  const [cars, setCars] = useState(data);

  const isCarFavorite = (id, array) => {
    return array.includes(id);
  };

  const removeCar = (id) => {
    setCars(cars.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      {favorite ? (
        <CardList>
          {/* <h1>visually hidden</h1> */}
          {cars &&
            cars.map((car) => (
              <CardCatalog
                key={car.id}
                removeCar={removeCar}
                carData={car}
                favoriteCar={true}
              />
            ))}
        </CardList>
      ) : (
        <CardList>
          {/* <h1>visually hidden</h1> */}
          {data &&
            data.map((car) => (
              <CardCatalog
                key={car.id}
                carData={car}
                favoriteCar={isCarFavorite(car.id, carFavorites)}
              />
            ))}
        </CardList>
      )}
    </Wrapper>
  );
};

export default Catalog;
