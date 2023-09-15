import React from "react";
import {
  Thumb,
  Image,
  Title,
  TitleModel,
  FeatureWrapp,
  Features,
  FeaturesItem,
  Description,
  TitleMidle,
  RulesList,
  RulesListItem,
  RulesNumber,
  ButtonPhone,
} from "./Card.styled";

const data = {
  id: "9582",
  year: 2008,
  make: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "$40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kiev, Ukraine",
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

const Card = () => {
  const [city, country] = data.address.split(", ").slice(1);

  const conditions = data.rentalConditions.split("\n");

  return (
    <div>
      <Thumb>
        <Image src={data.img} alt={`${data.make} ${data.model}`} />
      </Thumb>

      <Title>
        {data.make} <TitleModel>{data.model}</TitleModel>, {data.year}
      </Title>

      <FeatureWrapp>
        <Features>
          <FeaturesItem>{city}&nbsp;</FeaturesItem>
          <FeaturesItem>{country}&nbsp;</FeaturesItem>
          <FeaturesItem>Id: {data.id}&nbsp;</FeaturesItem>
          <FeaturesItem>Year: {data.year}&nbsp;</FeaturesItem>
          <FeaturesItem>Type: {data.type}</FeaturesItem>
        </Features>
        <Features>
          <FeaturesItem>
            Fuel Consumption: {data.fuelConsumption}&nbsp;
          </FeaturesItem>
          <FeaturesItem>Engine Size: {data.engineSize}</FeaturesItem>
        </Features>
      </FeatureWrapp>

      <Description>{data.description}</Description>

      <TitleMidle>Accessories and functionalities:</TitleMidle>
      <FeatureWrapp>
        <Features>
          {data.accessories.map((item, index) => (
            <FeaturesItem key={index}>{item}&nbsp;</FeaturesItem>
          ))}
        </Features>
        <Features>
          {data.functionalities.map((item, index) => (
            <FeaturesItem key={index}>{item}&nbsp;</FeaturesItem>
          ))}
        </Features>
      </FeatureWrapp>

      <TitleMidle>Rental Conditions:</TitleMidle>

      <RulesList>
        {conditions.map((item, index) => {
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
          <RulesNumber>{data.mileage.toLocaleString("en-US")}</RulesNumber>
        </RulesListItem>
        <RulesListItem>
          Price:{" "}
          <RulesNumber>{data.rentalPrice.split(/(\d+)/)[1]}$</RulesNumber>
        </RulesListItem>
      </RulesList>

      <ButtonPhone href="tel:+380730000000">Rental car</ButtonPhone>
    </div>
  );
};

export default Card;
