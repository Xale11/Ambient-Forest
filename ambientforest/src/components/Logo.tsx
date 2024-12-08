import { Heading, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <VStack gap={0}>
      <Heading as={"h1"} fontFamily={"Nazare"} size={"4xl"} letterSpacing={-9}>
        <Link to={"/"}>AF</Link>
      </Heading>
      <Text lineHeight={.95} textAlign={"center"}>
        <Link to={"/"}>AMBIENT FOREST CANDLES</Link>
      </Text>
    </VStack>
  )
}

export default Logo
