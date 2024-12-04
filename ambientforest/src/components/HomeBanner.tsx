import { HStack, Text } from "@chakra-ui/react"

const HomeBanner = () => {
  return (
    <HStack w={"100%"} bg={"--gold"} h={"10em"} mb={5} justify={"center"}>
      <Text w={"20%"} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"}>
        100% Wax soy candles
      </Text>
      <Text w={"20%"} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"}>
        Inspired by the seasons and peak district
      </Text>
      <Text w={"20%"} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"}>
        Hand thrown vessel designed by local artisan
      </Text>
      <Text w={"20%"} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"}>
        Crafted and tested for exceptional home fragrance dfdfdf
      </Text>
    </HStack>
  )
}

export default HomeBanner
