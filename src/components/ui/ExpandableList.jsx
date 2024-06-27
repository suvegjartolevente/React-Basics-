import React, { useState } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';

const ExpandableList = ({ children }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const childrenArray = React.Children.toArray(children);
  const itemsToShow = showAll ? childrenArray : childrenArray.slice(0, 5);

  return (
    <Box>
      <List spacing={3}>
        {itemsToShow.map((child, index) => (
          <ListItem key={index}>
            {child}
          </ListItem>
        ))}
      </List>
      {childrenArray.length > 5 && (
        <Button onClick={handleToggle} mt={2}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </Box>
  );
};

export default ExpandableList;
