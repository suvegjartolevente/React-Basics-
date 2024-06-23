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
        <Flex direction={["column", "row"]}>
          <Box flex="1" minH="300px">
            <Image
              src={recipe.image}
              alt={recipe.label}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>
          <Box flex="2" p={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {recipe.label}
            </Text>
            <Text fontSize="md" mb={4}>
              {recipe.ingredients}
            </Text>
            <Flex mt={2} mb={4}>
              {recipe.healthLabels.map((dietlabels, cautions) => (
                <Box
                  key={dietlabels}
                  bg="teal.500"
                  color="white"
                  borderRadius="md"
                  px={3}
                  py={1}
                  mx={1}
                >
                  {cautions}
                </Box>
              ))}
            </Flex>
            <Flex justifyContent="center" mt={4}>
              <Button
                onClick={() => clickFn()}
                variant="ghost"
                bg="purple.500"
                padding={5}
                color="white"
                _hover={{ bg: "teal.800" }}
              >
                Back to Main Page
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
