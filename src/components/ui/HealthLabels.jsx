import {
    Box,
    Text,
    
  } from "@chakra-ui/react";
  
  export const HealthLabelListing = ({ healthlabels }) => {
    return (
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Health labels:
        </Text>
        {healthlabels.map((healthlabels, index) => (
          <Text key={index} fontSize="md">
            {healthlabels}
          </Text>
        ))}
      </Box>
    );
  };
  