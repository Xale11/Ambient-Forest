import { Heading, Text, VStack } from "@chakra-ui/react"


const Logo = () => {
  return (
    <VStack gap={0}>
      <Heading as={"h1"} fontFamily={"Nazare"} size={"4xl"} letterSpacing={-9}>AF</Heading>
      <Text  lineHeight={.95} textAlign={"center"}>AMBIENT FOREST CANDLES</Text>
    </VStack>
  )
}

export default Logo
