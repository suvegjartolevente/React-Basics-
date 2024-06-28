import { Input } from "@chakra-ui/react";


export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant="flushed"
      placeholder="choose dish "
      _placeholder={{ opacity: 0.2, color: "green.500" }}
      size="lg"
      onChange={changeFn}
      {...props}
    />
  );
};
