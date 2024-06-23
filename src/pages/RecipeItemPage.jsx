import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";

export const RecipeItemPage = ({ recipe, clickFn }) => {
  
    

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      p={4}
    >
      <Box
        bg="white"
        w={["90%", "80%", "70%"]}
        maxW="1200px"
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex direction="column" align="center">
          <Box flex="1" minH="300px">
            <Image
              src={recipe.image}
              alt={recipe.label}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
          <Box p={6} textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {recipe.label}
            </Text>
            <Button
              onClick={clickFn}
              variant="ghost"
              bg="purple.500"
              padding={5}
              color="white"
              _hover={{ bg: "teal.800" }}
            >
              Back to Main Page
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
