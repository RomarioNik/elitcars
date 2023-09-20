import React, { useState } from "react";
import { Wrapper, Form } from "./Filters.styled";
import FilterBrand from "../FilterBrand";
import FilterPrice from "../FilterPrice";
import FilterMileage from "../FilterMileage";
import Button from "../Button";
import { getAllCars } from "../../services/carApi";

const Filters = ({ getFilteredCars }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState(["", ""]);

  const setCarModel = (model) => {
    setBrand(model);
  };

  const setChosePrice = (price) => {
    setPrice(price);
  };

  const setChoseMileage = (mileage) => {
    setMileage(mileage);
  };

  const filerByBrand = (brand, data) => {
    if (brand === "") {
      return data;
    }

    const normalizedBrand = brand.toLowerCase();
    const fiteredToBrand = data.filter(({ make }) =>
      make.toLocaleLowerCase().includes(normalizedBrand)
    );

    return fiteredToBrand;
  };

  const filterByPrice = (price, data) => {
    if (price === "" || Number(price) === 0) {
      return data;
    }

    const numPrice = Number(price);
    const filteredToPrice = data.filter(({ rentalPrice }) => {
      const carPrice = rentalPrice.split(/(\d+)/)[1];
      return Number(carPrice) <= numPrice;
    });

    return filteredToPrice;
  };

  const filterByMileage = (mileage, data) => {
    if (mileage[0] === "" && mileage[1] === "") {
      return data;
    }

    const numMileage = mileage.map((item) => Number(item));

    const filteredToMileage = data.filter(
      ({ mileage }) =>
        Number(mileage) >= numMileage[0] && Number(mileage) <= numMileage[1]
    );

    return filteredToMileage;
  };

  const getFiteredCars = async (brand, price, mileage) => {
    if (
      brand === "" &&
      price === "" &&
      mileage[0] === "" &&
      mileage[1] === ""
    ) {
      return;
    }

    try {
      const data = await getAllCars();
      const brandData = filerByBrand(brand, data);
      const priceData = filterByPrice(price, brandData);
      const mileageData = filterByMileage(mileage, priceData);
      getFilteredCars(mileageData);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFiteredCars(brand, price, mileage);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FilterBrand setCarModel={setCarModel} />
        <FilterPrice setChosePrice={setChosePrice} />
        <FilterMileage setChoseMileage={setChoseMileage} />
        <Button type="submit" btnWidth="136px">
          Search
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Filters;
