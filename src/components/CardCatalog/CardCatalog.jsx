import React, { useState } from "react";
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
import Modal from "../Modal";
import Card from "../Card";

const CardCatalog = ({ carData }) => {
  const [modal, setModal] = useState(false);

  const { img, make, model, year, rentalPrice } = carData;
  const { firstLine, secondLine } = createShortFeature(carData);

  const onToggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
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
        <Button children="Learn more" click={onToggleModal} />
      </ListItem>
      {modal && (
        <Modal onToggleModal={onToggleModal}>
          <Card />
        </Modal>
      )}
    </>
  );
};

export default CardCatalog;
