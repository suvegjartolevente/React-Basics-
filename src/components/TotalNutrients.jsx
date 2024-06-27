import { Box, Text } from "@chakra-ui/react";

export const TotalNutrients = ({ nutrients }) => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Total Nutrients
      </Text>
      <Text>
        {Object.keys(nutrients).map((key) => (
          <Text key={key}>
            {nutrients[key].label}: {nutrients[key].quantity}{" "}
            {nutrients[key].unit}
          </Text>
        ))}
      </Text>
    </Box>
  );
};
