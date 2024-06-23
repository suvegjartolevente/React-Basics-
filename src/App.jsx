import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { data } from "./utils/data"; 
import { RecipeItemPage } from "./pages/RecipeItemPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (recipe) => {
    console.log("Recipe clicked:", recipe); // Debugging statement
    setSelectedItem(recipe);
  };

  const handleBackToMainPage = () => {
    setSelectedItem(null);
  };

  return (
    <ChakraProvider>
      <div className="App">
        {selectedItem ? (
          <RecipeItemPage recipe={selectedItem} clickFn={handleBackToMainPage} />
        ) : (
          <RecipeListPage onItemClick={handleItemClick} />
        )}
      </div>
    </ChakraProvider>
  );
};
