import React, { useState } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';

export const ExpandableListTwo = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const itemsToShow = showAll ? items : items.slice(0, 5);

  return (
    <Box>
      <List spacing={3}>
        {itemsToShow.map((item, index) => (
          <ListItem key={index}>
            {item}
          </ListItem>
        ))}
      </List>
      {items.length > 5 && (
        <Button onClick={handleToggle} mt={2}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </Box>
  );
};


