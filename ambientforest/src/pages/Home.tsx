import { HStack, Spacer, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import homeCandle from "../assets/homeCandle.png"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import HomeBanner from "../components/HomeBanner"
import HomeProducts from "../components/HomeProducts"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <VStack w={"100%"} gap={0}>
      <VStack h={"100vh"} w={"100%"} bg={`url(${homeCandle}), rgba(0, 0, 0, 0.0)`} bgSize={"cover"} bgPos={"center"} bgBlendMode={"overlay"} bgRepeat={"no-repeat"}>
        <Navbar/>
        <Spacer/>
        <Link style={{marginBottom: "3.5em"}} to={"/shop"}>
          <Button size={"lg"} fontSize={"2xl"} px={"2em"} _hover={{px: "3em"}} transition={"all 300ms ease-in-out"} bg={"--black"} color={"white"} letterSpacing={"2px"}>SHOP NOW</Button>
        </Link>
      </VStack>
      <HomeBanner/>
      <HStack w={"100%"} justify={"center"} gap={{base: 3, lg: 16}} my={5}>
        <HomeProducts title="Candles"/>
        <HomeProducts title="Tealights"/>
        <HomeProducts title="Giftsets"/>
      </HStack>
      <Footer/>
    </VStack>
  )
}

export default Home
