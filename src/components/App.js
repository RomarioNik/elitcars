import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import FavoritesPage from "../pages/FavoritesPage";
import NotFound from "../pages/NotFoundPage";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
