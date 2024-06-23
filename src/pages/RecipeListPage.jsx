import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/ui/RecipeItemCard.jsx";

export const RecipeListPage = ({ onItemClick }) => {
  return (
    <>
      <Center flexDir="column" py={8}>
        <Heading mb={8}>Your Recipe App</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {data.hits.map((hit, index) => (
            <RecipeItemCard
              key={index}
              recipe={hit.recipe}
              onClick={() => onItemClick(index)}
            />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
