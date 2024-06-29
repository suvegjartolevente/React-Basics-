import { Box, Text,Grid } from "@chakra-ui/react";

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
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={2}
        width="100%"
      >
      {listLabels.map((label, index) => (
        <Box
          key={index}
          bg={bgColor}
          p={1}
          mb={1}
          borderRadius="md"
           width={"8em"}
          textAlign={textAlign} 
        >
          <Text fontSize="sm" color="white">
            {label}
          </Text>
        </Box>
      ))}
      </Grid>
    </Box>
    
  );
};
