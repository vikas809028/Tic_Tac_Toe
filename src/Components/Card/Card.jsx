import { Box, Center } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

function Card({ gameEnd, player, onPlay, index }) {
  let icon = <Icon />;
  if (player === "O") {
    icon = <Icon name="circle" />;
  } else if (player === "X") {
    icon = <Icon name="cross" />;
  }

  return (
    <Box
    border={"1px"}
    borderRadius={"lg"}

      bg="white"
      height={{base:"140px",md:"150px",xl:"160px"}}
      width="100%"
      m={0}
      onClick={() => !gameEnd && player === "" && onPlay(index)}
      cursor={!gameEnd && player === "" ? "pointer" : "not-allowed"}
    >
      <Center height="100%">{icon}</Center>
    </Box>
  );
}

export default Card;
