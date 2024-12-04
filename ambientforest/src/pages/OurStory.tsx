import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import ourStoryImage from "../assets/ourStoryImage.png"
import familyImage from "../assets/familyImage.png"
import forestImage from "../assets/forestImage.png"
import Footer from "../components/Footer"

const OurStory = () => {
  return (
    <VStack w={"100vw"} gap={5} >
      <Navbar/>
      <VStack h={{base: "auto", xl: "70vh"}} w={"100%"} pb={10} pt={{base: "7.5em", lg: "10em", xl: "13em"}} gap={3} bg={`url(${ourStoryImage}), rgba(0, 0, 0, 0.4)`} bgSize={"cover"} bgPos={"center"} bgBlendMode={"overlay"} bgRepeat={"no-repeat"}>
        <Heading size={{base: "3xl", xl: "5xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"--white"}>Our Story</Heading>
        <Text w={{base: "90%", lg: "40%"}} fontSize={{base: "sm", xl: "md"}} textAlign={"center"} letterSpacing={"1px"} color={"--white"}>Ambient Forest Candles are locally produced, scented soy candles. Together with a local artist, we have designed unique and beautiful pots inspired by the seasons and by the outstanding Peak District countryside.</Text>
      </VStack>
      <VStack w={"100%"} gap={14} my={5}>

        <HStack w={"100%"} justify={"center"} gap={{base: 10, lg: "10em"}} wrap={"wrap"}>
          <VStack w={{base: "90%", lg: "30%"}} gap={5}>
            <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} textAlign={"center"} color={"black"}>Making A Change</Heading>
            <Text textAlign={"center"} letterSpacing={"1px"} lineHeight={"1.7em"} color={"black"}>Having a daughter with Down’s Syndrome we recognised the significantly high unemployment rates for individuals with the condition and saw this as an opportunity to create employment for her and potentially others with Downs. Making use of our location, a small hobby became an opportunity for our daughter and myself.</Text>
          </VStack>
          <Image src={familyImage} maxH={{base: "45vh", lg: "30em"}} maxW={{base: "90%", lg: "50%"}} alt="Image of the family that founded Ambient Forest Candles"/>
        </HStack>

        <HStack w={"100%"} justify={"center"} gap={{base: 10, lg: "10em"}} wrap={"wrap-reverse"}>
          <Image src={forestImage} maxH={{base: "45vh", lg: "30em"}} maxW={{base: "90%", lg: "50%"}} alt="Image of Macclesfield Forest"/>
          <VStack w={{base: "90%", lg: "30%"}} gap={5}>
            <Heading size={"3xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"} textAlign={"center"}>Inspired by peak district</Heading>
            <Text textAlign={"center"} letterSpacing={"1px"} lineHeight={"1.7em"} color={"black"}>Months of testing and development to produce optimal scent throw and burn time for each fragrance. Working in collaboration with local artisans to produce unique, stylish hand thrown pots that make our Ambient Forest Candles little works of olfactory art. Taking inspiration from fragrances in and around where we live, from the beautiful Peak District hills, Forest walks and our own gardens and allotment.</Text>
          </VStack>
        </HStack>

        

      </VStack>
      <Footer/>
    </VStack>
  )
}

export default OurStory
