import React, { useState } from "react";
import {
  Wrapper,
  Label,
  InputWrapper,
  TextFrom,
  InputFrom,
  TextTo,
  InputTo,
} from "./FilterMileage.styled";

const FilterMileage = ({ setChoseMileage }) => {
  const [fromMileage, setFromMileage] = useState("");
  const [toMileage, setToMileage] = useState("");

  const handleChangeFromMileage = ({ target: { value } }) => {
    if (value.trim() === "") {
      setFromMileage("");
      return;
    }

    if (isValueNumber(deleteComaFromNumber(value))) {
      return "";
    }
    setFromMileage(deleteComaFromNumber(value));
  };

  const handleChangeToMileage = ({ target: { value } }) => {
    if (value.trim() === "") {
      setFromMileage("");
      return;
    }

    if (isValueNumber(deleteComaFromNumber(value))) {
      return "";
    }
    setToMileage(deleteComaFromNumber(value));
  };

  const handleBlur = () => {
    setChoseMileage([fromMileage, toMileage]);
  };

  const isValueNumber = (value) => {
    return isNaN(value);
  };

  const deleteComaFromNumber = (str) => {
    const newStr = str.split(",").join("");
    return newStr;
  };

  const changeValue = (value) => {
    if (value === "") {
      return "";
    }

    const newValue = Number(value).toLocaleString("en-US");
    return newValue;
  };

  return (
    <Wrapper>
      <Label htmlFor="mileageFrom">Car mileage / km</Label>
      <InputWrapper>
        <TextFrom>From</TextFrom>
        <InputFrom
          id="mileageFrom"
          name="mileageFrom"
          value={changeValue(fromMileage)}
          onChange={handleChangeFromMileage}
          onBlur={handleBlur}
          type="text"
        />

        <TextTo>To</TextTo>
        <InputTo
          id="mileageTo"
          name="mileageTo"
          value={changeValue(toMileage)}
          onChange={handleChangeToMileage}
          onBlur={handleBlur}
          type="text"
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default FilterMileage;
