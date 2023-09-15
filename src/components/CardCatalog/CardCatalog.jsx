import React from "react";
import { createShortFeature } from "../../utils";
import {
  ListItem,
  Thumb,
  Image,
  TitleWrapp,
  Title,
  Price,
  TitleModel,
  FeatureWrapp,
  Features,
  FeaturesItem,
} from "./CardCatalog.styled";
import Button from "../Button";

const CardCatalog = ({ carData }) => {
  const { img, make, model, year, rentalPrice } = carData;
  const { firstLine, secondLine } = createShortFeature(carData);

  return (
    <ListItem>
      <Thumb>
        <Image src={img} alt={`${make} ${model}`} />
      </Thumb>
      <TitleWrapp>
        <Title>
          {make} <TitleModel>{model}</TitleModel>, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </TitleWrapp>
      <FeatureWrapp>
        <Features>
          {firstLine.map((item, index) => (
            <FeaturesItem key={index}>{item}&nbsp;</FeaturesItem>
          ))}
        </Features>
        <Features>
          {secondLine.map((item, index) => (
            <FeaturesItem key={index}>{item}&nbsp;</FeaturesItem>
          ))}
        </Features>
      </FeatureWrapp>
      <Button children="Learn more" />
    </ListItem>
  );
};

export default CardCatalog;
