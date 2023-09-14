import React, { useEffect, useState } from "react";
import CardCatalog from "../CardCatalog";
import { getCars } from "../../services/carApi/getCars";
import { CardList } from "./Catalog.styled";

const Catalog = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBaseCars = async () => {
      try {
        const data = await getCars();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getBaseCars();
  }, []);

  console.log(data);

  return (
    <section>
      <CardList>
        {/* <h1>visually hidden</h1> */}
        {data && data.map((car) => <CardCatalog carData={car} />)}
      </CardList>
    </section>
  );
};

export default Catalog;
