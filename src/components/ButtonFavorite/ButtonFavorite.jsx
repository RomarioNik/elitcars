import React, { useState } from "react";
import { ButtonStyled } from "./ButtonFavorite.styled";
import Icon from "../Icon";

const ButtonFavorite = ({ idCar, favoriteCar = false }) => {
  const [favorite, setFavorite] = useState(favoriteCar);
  const [isLoading, setIsLoading] = useState(false);

  const saveIdCarToLocalStorage = (arr) => {
    localStorage.setItem("carfavorite", JSON.stringify(arr));
    setIsLoading(false);
  };

  const getIdCarFromLocalStorage = () => {
    try {
      const storage = localStorage.getItem("carfavorite");
      if (!storage) {
        localStorage.setItem("carfavorite", JSON.stringify([]));
      }

      return JSON.parse(localStorage.getItem("carfavorite"));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onToggleFavorite = (id) => {
    setIsLoading(true);
    setFavorite((prev) => !prev);

    const storage = getIdCarFromLocalStorage();
    const idx = storage.indexOf(id);

    if (idx === -1) {
      storage.push(id);
      saveIdCarToLocalStorage(storage);
      return;
    }

    storage.splice(idx, 1);
    saveIdCarToLocalStorage(storage);
  };

  return (
    <ButtonStyled
      type="button"
      disabled={isLoading}
      onClick={() => onToggleFavorite(idCar)}
    >
      <Icon
        id="icon-heart"
        svgStroke={favorite ? "#3470FF" : "#ffffff"}
        svgFill={favorite ? "#3470FF" : "none"}
        svgWidth={18}
        svgHeight={18}
      />
    </ButtonStyled>
  );
};

export default ButtonFavorite;
