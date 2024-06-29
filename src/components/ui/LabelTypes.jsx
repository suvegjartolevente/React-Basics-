import { Box, Text } from "@chakra-ui/react";

export const LabelListing = ({
  listLabels,
  title,
  bgColor,
  fontWeight = "bold",
  alignItems = "center", 
  textAlign = "center", 
}) => {
  return (
    <Box mb={4} display="flex" flexDirection="column" alignItems={alignItems}>
      <Text fontSize="lg" mb={2} color="black" fontWeight={fontWeight}>
        {title}
      </Text>
      {listLabels.map((label, index) => (
        <Box
          key={index}
          bg={bgColor}
          p={1}
          mb={1}
          borderRadius="md"
          width={"12em"}
          textAlign={textAlign} 
        >
          <Text fontSize="sm" color="white">
            {label}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
