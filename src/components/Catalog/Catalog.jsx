import CardCatalog from "../CardCatalog";
import { Wrapper, CardList } from "./Catalog.styled";

const Catalog = ({ data }) => {
  return (
    <Wrapper>
      <CardList>
        {/* <h1>visually hidden</h1> */}
        {data && data.map((car) => <CardCatalog key={car.id} carData={car} />)}
      </CardList>
    </Wrapper>
  );
};

export default Catalog;
