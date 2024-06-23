import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  return (
    <ChakraProvider>
      <RecipeListPage />
    </ChakraProvider>
  );
};
