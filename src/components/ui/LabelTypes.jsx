import { Box, Text } from "@chakra-ui/react";

export const LabelListing = ({ listLabels, title, bgColor }) => {
  return (
    <Box mb={4}>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {title}
      </Text>
      {listLabels.map((label, index) => (
        <Box key={index} bg={bgColor} p={1} mb={1} borderRadius="md" width={"12em"}>
          <Text fontSize="sm" color="white">
            {label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
