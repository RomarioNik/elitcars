import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../index.styled";
import theme from "../constants/theme";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritesPage from "../pages/FavoritesPage";
import NotFound from "../pages/NotFoundPage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    try {
      const storage = localStorage.getItem("theme");
      if (!storage) {
        localStorage.setItem("theme", JSON.stringify("light"));
        return;
      }

      setCurrentTheme(JSON.parse(localStorage.getItem("theme")));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));

    localStorage.setItem(
      "theme",
      JSON.stringify(currentTheme === "light" ? "dark" : "light")
    );
  };

  return (
    <>
      {currentTheme && (
        <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
