import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { RecipeItemCard } from "./ui/RecipeItemCard";

export const VeganFilter = ({ recipes, onItemClick }) => {
  const veganRecipes = recipes.filter(recipe =>
    recipe.recipe.healthLabels.includes("Vegan")
  );

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Vegan Recipes
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {veganRecipes.map((hit, index) => (
          <RecipeItemCard
            key={index}
            recipe={hit.recipe}
            onClick={() => onItemClick(hit.recipe)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};