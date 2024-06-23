import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { data } from "./utils/data"; 
import { RecipeItemPage } from "./pages/RecipeItemPage";

export const App = () => {
  console.log(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (recipe) => {
    setSelectedItem(recipe);
  };

  const handleBackToMainPage = () => {
    setSelectedItem(null);
  };

  return (
    <ChakraProvider>
      <div className="App">
        {selectedItem ? (
          <RecipeItemPage item={selectedItem} clickFn={handleBackToMainPage} />
        ) : (
          <RecipeListPage onItemClick={handleItemClick} />
        )}
      </div>
    </ChakraProvider>
  );
};
