import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import {
  Wrapper,
  Label,
  InputWrapper,
  Input,
  ButtonStyled,
  ListWrapper,
  List,
  ListItem,
  ButtonList,
} from "./FilterBrand.styled";

const listOfCars = [
  { id: 1, model: "Buick" },
  { id: 2, model: "Volvo" },
  { id: 3, model: "Hummer" },
  { id: 4, model: "Subaru" },
  { id: 5, model: "Mitsubishi" },
  { id: 6, model: "Nissan" },
  { id: 7, model: "Lincoln" },
  { id: 8, model: "GMC" },
  { id: 9, model: "MINI" },
  { id: 10, model: "Bentley" },
  { id: 12, model: "Mercedes-Benz" },
  { id: 13, model: "Aston Martin" },
  { id: 14, model: "Pontiac" },
  { id: 15, model: "Lamborghini" },
  { id: 16, model: "Audi" },
  { id: 17, model: "BMW" },
  { id: 18, model: "Chevrolet" },
  { id: 19, model: "Honda" },
];

const FilterBrand = ({ setCarModel }) => {
  const [search, setSearch] = useState("");
  const [openList, setOpenList] = useState(false);
  const [fiteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    setFilteredModels(listOfCars);
  }, []);

  const filteredListOfCars = (cars, value) => {
    const normalizedFilter = value.toLocaleLowerCase();

    return cars.filter(({ model }) =>
      model.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const handleClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const handleBlur = () => {
    setCarModel(search);
    // setOpenList(false);
  };

  const handleChange = ({ target: { value } }) => {
    setSearch(value);

    if (value.trim() === "") {
      setFilteredModels(listOfCars);
    }

    if (value.trim() !== "") {
      setFilteredModels(filteredListOfCars(listOfCars, value));
      setOpenList(true);
    }
  };

  const handleModelClick = (model) => {
    setSearch(model);
    setCarModel(model);
    setOpenList(false);
  };

  return (
    <Wrapper>
      <Label htmlFor="brand">Card brand</Label>
      <InputWrapper>
        <Input
          id="brand"
          name="brand"
          value={search}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Type the text"
        />
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
      {openList && fiteredModels.length > 0 && (
        <>
          {/* <ListBackdrop></ListBackdrop> */}
          <ListWrapper>
            <List>
              {fiteredModels.map(({ id, model }) => (
                <ListItem key={id}>
                  <ButtonList
                    search={search}
                    model={model}
                    onClick={() => handleModelClick(model)}
                  >
                    {model}
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

export default FilterBrand;
