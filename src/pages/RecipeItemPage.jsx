import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { IngredientsListing } from "../components/Ingredients";
import { LabelListing } from "../components/ui/LabelTypes";
import { TotalNutrients } from "../components/TotalNutrients";
import { ExpandableListTwo } from "../components/ExpandTest";
  import { ExpandableList } from "../components/ui/ExpandableList";



export const RecipeItemPage = ({ recipe, clickFn }) => {
  const { mealType, totalTime, ingredientLines, healthLabels, dietLabels, cautions, totalNutrients } =
    recipe;

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
    const nutris = <TotalNutrients/>

  const formatMealType = (mealTypeArray) => {
    return mealTypeArray.map((type) => type.toUpperCase()).join(", ");
  };

  return (
    <Box
      w="100vw"
      //   h="100vh"
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
          <Box p={6} textAlign="center"></Box>
          <Box flex="1" minH="400px" mb={6}>
            <Image
              src={recipe.image}
              alt={recipe.label}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Box>

          <Box p={6} textAlign="center">
            <Text fontSize="md" mb={4}>
              {formatMealType(mealType)}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              {recipe.label}
            </Text>

            <Text fontSize="md" mb={4}>
              Total cooking time:{" "}
              <Text as="span" fontWeight="bold">
                {totalTime} minutes
              </Text>
            </Text>
            <Text fontSize="md" mb={4}>
              Service:{" "}
              <Text as="span" fontWeight="bold">
                {recipe.yield}
                </Text>
              <IngredientsListing ingredients={ingredientLines} />
              {healthLabels && healthLabels.length > 0 && (
                <LabelListing listLabels={healthLabels} title="Health labels:" bgColor="#c974e8" />
              )}
              {dietLabels && dietLabels.length > 0 && (
                <LabelListing listLabels={dietLabels} title="Diet:" bgColor="#52e385" />
              )}
              {cautions && cautions.length > 0 && (
                <LabelListing listLabels={cautions} title="Cautions:" bgColor="#e37dc8" />
              )}
              
              <ExpandableList>
              <TotalNutrients nutrients={totalNutrients}/>
              </ExpandableList>
              
              <ExpandableListTwo items={numbers.map(number => `${number}`)}>
              <TotalNutrients nutrients={numbers}/>

              </ExpandableListTwo>
              
              
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
