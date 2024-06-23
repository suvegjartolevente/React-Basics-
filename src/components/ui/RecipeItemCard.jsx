import { Box, Image, Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ recipe }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#5FBCD8"
      w="100%"
      p={4}
      color="white"
      borderRadius="lg"
      maxW="sm"
      boxShadow="md"
      _hover={{ transform: "scale(1.01)" }}
    >
      <Box bg="white" borderRadius="lg">
        <Box w="100%" p={2}>
          <Image
            src={recipe.image}
            w="100%"
            h="200px"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box textAlign="center" mt={4}>
          <Text as="h1" fontWeight="bold" color="black" p={4}>
            {recipe.label}
          </Text>
          <Text as="h2" color="black" p={2}>
            {recipe.mealType}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
