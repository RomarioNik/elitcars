import React, { useState } from "react";
import Icon from "../Icon";
import {
  Wrapper,
  Label,
  InputWrapper,
  Text,
  ButtonStyled,
  ListWrapper,
  List,
  ListItem,
  ButtonList,
} from "./FilerPrice.styled";

const priceList = [
  { id: "1", price: "0" },
  { id: "2", price: "10" },
  { id: "3", price: "20" },
  { id: "4", price: "30" },
  { id: "5", price: "40" },
  { id: "6", price: "50" },
  { id: "7", price: "60" },
  { id: "8", price: "70" },
  { id: "9", price: "80" },
  { id: "10", price: "90" },
];

const FilterPrice = ({ setChosePrice }) => {
  const [carPrice, setCarPrice] = useState("");
  const [openList, setOpenList] = useState(false);

  const handleClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handlePriceClick = (price) => {
    setCarPrice(price);
    setChosePrice(price);
    setOpenList(false);
  };

  return (
    <Wrapper>
      <Label htmlFor="brand">Price/1 hour</Label>
      <InputWrapper>
        <Text>{`To ${carPrice}$`}</Text>
        <ButtonStyled type="button" onClick={handleClickOpenList}>
          <Icon
            style={{ transform: openList ? "rotate(180deg)" : "" }}
            id="icon-arrow"
            svgStroke="#121417"
            svgFill="none"
            svgWidth={20}
            svgHeight={20}
          />
        </ButtonStyled>
      </InputWrapper>
      {openList && (
        <>
          {/* <ListBackdrop></ListBackdrop> */}
          <ListWrapper>
            <List>
              {priceList.map(({ id, price }) => (
                <ListItem key={id}>
                  <ButtonList
                    search={carPrice}
                    price={price}
                    onClick={() => handlePriceClick(price)}
                  >
                    {price}
                  </ButtonList>
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default FilterPrice;
