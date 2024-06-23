import { Box, Text } from "@chakra-ui/react";

export const HealthLabelListing = ({ healthlabels }) => {
  return (
    <Box mb={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Health labels:
      </Text>
      {healthlabels.map((label, index) => (
        <Box key={index} bg="#c974e8" p={2} mb={2} borderRadius="md">
          <Text fontSize="md" color="white">
            {label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
