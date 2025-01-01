import { HStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BannnerMessages } from "../types/types"

interface Props {
  bannerMessages: BannnerMessages
}

const HomeBanner = ({bannerMessages}: Props) => {

  const slideSpeed = 3500

  // slide page num
  const [slideNum, setSlideNum] = useState<number>(1)
  // slide distance in vh
  const [slideVal, setSlideVal] = useState<number>(0)

  const slideBannerMessage = () => {
    setSlideNum(prev => prev + 1)
  }

  useEffect(() => {
    const intervalId = setInterval(slideBannerMessage, slideSpeed)

    return () => {
      clearInterval(intervalId);
    };
  }, [])

  // setInterval does not track the state of slideNum so I need another useEffect to control the slides based on slide num
  useEffect(() => {
    if (slideNum > 4){
      setSlideNum(1)
      setSlideVal(0)
    } else {
      setSlideVal((slideNum - 1) * 100)
    }
  }, [slideNum])

  return (
    <HStack w={"100%"} bg={"--gold"} h={"10em"} mb={5} justify={{base: "start", sm: "center"}} gap={{base: 0, sm: 0}}>
      <Text w={{base: "100vw", sm: "20%"}} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"} flexShrink={0} transform={{base: `translateX(-${slideVal}vw)`, sm: "none"}} transition={"300ms all ease-in-out"}>
        {bannerMessages?.msg1}
      </Text>
      <Text w={{base: "100vw", sm: "20%"}} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"} flexShrink={0} transform={{base: `translateX(-${slideVal}vw)`, sm: "none"}} transition={"300ms all ease-in-out"}>
        {bannerMessages?.msg2}
      </Text>
      <Text w={{base: "100vw", sm: "20%"}} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"} flexShrink={0} transform={{base: `translateX(-${slideVal}vw)`, sm: "none"}} transition={"300ms all ease-in-out"}>
        {bannerMessages?.msg3}
      </Text>
      <Text w={{base: "100vw", sm: "20%"}} fontSize={{base: "xs", lg: "lg"}} letterSpacing={"2px"} px={5} textAlign={"center"} flexShrink={0} transform={{base: `translateX(-${slideVal}vw)`, sm: "none"}} transition={"300ms all ease-in-out"}>
        {bannerMessages?.msg4}
      </Text>
    </HStack>
  )
}

export default HomeBanner
