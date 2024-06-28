import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Text, Box, Button, Center } from "@chakra-ui/react";
import { RecipeListPage } from "../pages/RecipeListPage";

export const DishSearch = ({ recipes, onItemClick }) => {
  const [searchField, setSearchField] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleChange = (event) => setSearchField(event.target.value);

  const handleFilterClick = (filter) => {
    setSelectedFilter(prevFilter => prevFilter === filter ? null : filter);
  };

  const matchedDishes = recipes.filter((hit) => {
    const matchesSearch = hit.recipe.label.toLowerCase().includes(searchField.toLowerCase());
    const matchesFilter = selectedFilter ? hit.recipe.healthLabels.includes(selectedFilter) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Box mb={8} alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="lg" mb={2}>
        Search for dishes:
      </Text>
      <TextInput changeFn={handleChange} w={150} mb={8} />
      <Box mb={4}>
        <Button
          onClick={() => handleFilterClick("Vegan")}
          colorScheme={selectedFilter === "Vegan" ? "green" : "gray"}
          mr={2}
        >
          Vegan
        </Button>
        <Button
          onClick={() => handleFilterClick("Vegetarian")}
          colorScheme={selectedFilter === "Vegetarian" ? "green" : "gray"}
          mr={2}
        >
          Vegetarian
        </Button>
        <Button
          onClick={() => handleFilterClick("Pescatarian")}
          colorScheme={selectedFilter === "Pescatarian" ? "green" : "gray"}
        >
          Pescatarian
        </Button>
      </Box>
      <RecipeListPage recipes={matchedDishes} onItemClick={onItemClick} />
    </Box>
  );
};