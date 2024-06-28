import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Text, Box } from '@chakra-ui/react';
import { RecipeListPage } from "../pages/RecipeListPage";

export const DishSearch = ({recipes, onItemClick }) => {
  const [searchField, setSearchField] = useState("");

  
  const matchedDishes = recipes.filter((recipe) =>
    recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );


  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <Box mb={8}>
      <Text fontSize="lg" mb={2}>Search for dishes:</Text>
      <TextInput changeFn={handleChange} w={150} mb={8} />
      <Text>Search Query: {searchField}</Text>
      <RecipeListPage recipes={matchedDishes} onItemClick={onItemClick} />
    </Box>
  );
};

