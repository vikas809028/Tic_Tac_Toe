import { Icon as ChakraIcon } from "@chakra-ui/react";
import { FaRegCircle, FaTimes } from "react-icons/fa";

function Icon({ name }) {
  if (name === "circle") {
    return <ChakraIcon as={FaRegCircle} boxSize={12} />;
  } else if (name === "cross") {
    return <ChakraIcon as={FaTimes} boxSize={12} />;
  } else {
    return null;
  }
}

export default Icon;
