import { Box, Text } from "@chakra-ui/react";

export const LabelListing = ({ healthlabels }) => {
  return (
    <Box mb={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Health labels:
      </Text>
      {healthlabels.map((label, index) => (
        <Box key={index} bg="#c974e8" p={1} mb={1} borderRadius="md" width={"12em"}>
          <Text fontSize="sm" color="white">
            {label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
