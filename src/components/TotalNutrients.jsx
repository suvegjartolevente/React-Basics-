import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export const TotalNutrients = ({ nutrients }) => {
  const [showAll, setShowAll] = useState(false);

  
  const allNutritions = Object.keys(nutrients).map((key) => ({
    label: nutrients[key].label,
    quantity: nutrients[key].quantity.toFixed(2),
    unit: nutrients[key].unit,
  }));

  const initialNutritions = allNutritions.slice(0, 5);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Total Nutrients
      </Text>

      {initialNutritions.map((nutrition, index) => (
        <Text key={index}>
          {nutrition.label}: {nutrition.quantity} {nutrition.unit}
        </Text>
      ))}

     
      {!showAll && allNutritions.length > 5 && (
        <Button onClick={handleToggle} mt={2}>
          Show More
        </Button>
      )}

      {showAll &&
        allNutritions.slice(5).map((nutrition, index) => (
          <Text key={index}>
            {nutrition.label}: {nutrition.quantity} {nutrition.unit}
          </Text>
        ))}

    
      {showAll && (
        <Button onClick={handleToggle} mt={2}>
          Show Less
        </Button>
      )}
    </Box>
  );
};
