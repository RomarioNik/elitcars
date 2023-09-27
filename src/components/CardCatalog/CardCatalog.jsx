import React, { useState } from "react";
import { createShortFeature } from "../../utils";
import {
  ListItem,
  Thumb,
  Image,
  ButtonWrap,
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
import ButtonFavorite from "../ButtonFavorite";

const CardCatalog = ({ carData, favoriteCar, removeCar }) => {
  const [modal, setModal] = useState(false);

  const { id, img, make, model, year, rentalPrice } = carData;
  const { firstLine, secondLine } = createShortFeature(carData);

  const onToggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <ListItem>
        <Thumb>
          <Image src={img} alt={`${make} ${model}`} width={274} />
          <ButtonWrap>
            <ButtonFavorite
              idCar={id}
              removeCar={removeCar}
              favoriteCar={favoriteCar}
            />
          </ButtonWrap>
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
        <Button type="submit" children="Learn more" click={onToggleModal} />
      </ListItem>
      {modal && (
        <Modal onToggleModal={onToggleModal}>
          <Card carId={carData.id} />
        </Modal>
      )}
    </>
  );
};

export default CardCatalog;
