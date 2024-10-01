import { useState } from "react";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import Card from "../Card/Card";
import IsWinner from "../../helpers/checkWinner";
import IsDraw from "../../helpers/checkDraw";
import bgiImage from '../../assets/bgi.jpg'; // Import the background image

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  function play(index) {
    const newBoard = [...board];
    newBoard[index] = turn ? "O" : "X";

    const win = IsWinner(newBoard, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    } else if (IsDraw(newBoard)) {
      setIsDraw(true);
    }

    setBoard(newBoard);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setIsDraw(false);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <Box
      w="100%"
      h="100vh"
      backgroundImage={`url(${bgiImage})`} // Use the imported image
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      rounded={"revert"}
    >
      <Flex
        boxShadow="lg"
        borderRadius="lg"
        w="100vw"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        p={4}
      
      >
        {winner && (
          <VStack spacing={4} mb={6}>
            <Heading fontSize={"xxx-large"} color={"red.500"} size="lg">Winner is {winner}</Heading>
            <Button color={"white"} colorScheme="blue" onClick={reset}>
              Reset Game
            </Button>
          </VStack>
        )}

        {isDraw && !winner && (
          <VStack spacing={4} mb={6}>
            <Heading size="lg">It is a Draw!</Heading>
            <Button colorScheme="blue" onClick={reset}>
              Reset Game
            </Button>
          </VStack>
        )}

        {!winner && !isDraw && (
          <Heading fontSize={"xxx-large"} color={"red.300"} size="lg" mb={6}>
            Current Turn: {turn ? "O" : "X"}
          </Heading>
        )}

        <Flex
          mx="auto"
          flexDirection="row"
          wrap="wrap"
          w={{ base: "98%", sm: "70%", md: "60%", lg: "45%", xl: "30%" }}
          boxShadow="lg"
          borderRadius="md" >
         
          {board.map((el, idx) => (
            <Box zIndex={1} w="33.33%" key={idx}>
              <Card gameEnd={winner || isDraw} onPlay={play} player={el} index={idx} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Grid;
