import React, { useEffect, useState } from "react";
import {
  Thumb,
  Image,
  Title,
  TitleModel,
  FeatureWrapp,
  Features,
  FeaturesItem,
  Accessories,
  AccessoriesItem,
  Description,
  TitleMidle,
  RulesList,
  RulesListItem,
  RulesNumber,
  ButtonPhone,
} from "./Card.styled";
import { getCarById } from "../../services/carApi";

const Card = ({ carId }) => {
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCar = async (id) => {
      try {
        const car = await getCarById(id);
        setCar(car);
      } catch (e) {
        setError(e.message);
      }
    };

    getCar(carId);
  }, [carId]);

  return (
    <div>
      {car && !error && (
        <>
          <Thumb>
            <Image src={car.img} alt={`${car.make} ${car.model}`} />
          </Thumb>

          <Title>
            {car.make} <TitleModel>{car.model}</TitleModel>, {car.year}
          </Title>

          <FeatureWrapp>
            <Features>
              <FeaturesItem>{car.address.split(", ")[1]}&nbsp;</FeaturesItem>
              <FeaturesItem>{car.address.split(", ")[2]}&nbsp;</FeaturesItem>
              <FeaturesItem>Id: {car.id}&nbsp;</FeaturesItem>
              <FeaturesItem>Year: {car.year}&nbsp;</FeaturesItem>
              <FeaturesItem>Type: {car.type}</FeaturesItem>
            </Features>
            <Features>
              <FeaturesItem>
                Fuel Consumption: {car.fuelConsumption}&nbsp;
              </FeaturesItem>
              <FeaturesItem>Engine Size: {car.engineSize}</FeaturesItem>
            </Features>
          </FeatureWrapp>

          <Description>{car.description}</Description>

          <TitleMidle>Accessories and functionalities:</TitleMidle>
          <FeatureWrapp>
            <Accessories>
              {[...car.accessories, ...car.functionalities].map(
                (item, index) => (
                  <AccessoriesItem key={index}>{item}&nbsp;</AccessoriesItem>
                )
              )}
            </Accessories>
          </FeatureWrapp>

          <TitleMidle>Rental Conditions:</TitleMidle>

          <RulesList>
            {car.rentalConditions.split("\n").map((item, index) => {
              const rule = item.split(/(\d+)/);
              if (rule[1]) {
                return (
                  <RulesListItem key={index}>
                    {rule[0]}
                    <RulesNumber>{rule[1]}</RulesNumber>
                  </RulesListItem>
                );
              }
              return <RulesListItem key={index}>{rule[0]}</RulesListItem>;
            })}
            <RulesListItem>
              Mileage:{" "}
              <RulesNumber>{car.mileage.toLocaleString("en-US")}</RulesNumber>
            </RulesListItem>
            <RulesListItem>
              Price:{" "}
              <RulesNumber>{car.rentalPrice.split(/(\d+)/)[1]}$</RulesNumber>
            </RulesListItem>
          </RulesList>

          <ButtonPhone href="tel:+380730000000">Rental car</ButtonPhone>
        </>
      )}
    </div>
  );
};

export default Card;
