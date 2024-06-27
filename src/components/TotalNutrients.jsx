import { Box, Text } from "@chakra-ui/react";

export const TotalNutrients = ({ nutrients }) => {
    
    const nutritions = Object.keys(nutrients).map((key) => ({
      label: nutrients[key].label,
      quantity: nutrients[key].quantity,
      unit: nutrients[key].unit,
    }));
  
    return (
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Total Nutrients
        </Text>
        
        {nutritions.map((nutrition, index) => (
          <Text key={index}>
            {nutrition.label}: {nutrition.quantity} {nutrition.unit}
          </Text>
        ))}
      </Box>
    );
  };
