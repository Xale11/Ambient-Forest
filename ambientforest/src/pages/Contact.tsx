import { Heading, HStack, Icon, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { IoCallOutline, IoMailOutline } from "react-icons/io5"
import { Toaster, toaster } from "../components/ui/toaster"
import { Field } from "../components/ui/field"

const Contact = () => {

  const copyContent = () => {
    toaster.create({
      title: "Copied To Clipboard",
      type: "success",
      action: {
        label: "close",
        onClick: () => {return},
      }
    })
  }

  return (
    <VStack>
      <Navbar/>
      <Toaster/>
      <VStack mt={{base: "6em", lg: "10em"}}>
        <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Get In Touch</Heading>
        <Text w={"100%"} textAlign={"center"} color={"black"}>Have any questions about our products? Please Use the contact form below.</Text>
        <HStack mt={5} gap={10}>
          <Icon color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
            <FaFacebookF />
          </Icon>
          <Icon color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
            <FaXTwitter />
          </Icon>
          <Icon color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
            <FaLinkedin />
          </Icon>
          <Icon color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
            <FaPinterestP />
          </Icon>
        </HStack>
      </VStack>
      <HStack w={"100%"} my={7} px={{base: 0, lg: "5em"}} align={"start"} justify={"center"} wrap={{base: "wrap", lg: "nowrap"}} gap={{base: 10, lg: 2}}>
        <VStack w={{base: "100%", lg: "40%"}} align={{base: "center", lg: "start"}}>
          <Heading size={{base: "3xl", lg: "5xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Contact Details</Heading>
          <Text fontSize={"sm"} w={"100%"} color={"black"} textAlign={{base: "center", lg: "start"}}>Have any questions about our products? Please Use the contact form below.</Text>
          <Button onClick={() => copyContent()} px={5} py={7} bg={"--gold"} fontSize={"lg"} color={"white"} _hover={{pr: 10}} transition={"all 300ms ease-in-out"}>
            <IoCallOutline />
            <Text letterSpacing={"1px"}>01524 333888</Text>
          </Button>
          <Button onClick={() => copyContent()} px={5} py={7} bg={"--gold"} fontSize={"lg"} color={"white"} _hover={{pr: 10}} transition={"all 300ms ease-in-out"}>
            <IoMailOutline />
            <Text letterSpacing={"1px"}>sampleemail@gmail.com</Text>
          </Button>
        </VStack>
        <VStack p={4} w={{base: "95%", lg: "60%"}} bg={"--black"} align={"start"}>
          <HStack w={"100%"} wrap={{base: "wrap", lg: "nowrap"}}>
           <Field w={{base: "100%", lg: "50%"}} label="Name" errorText="No name has been entered">
              <Input bg={"--white"} borderRadius={0} color={"black"} type="text" placeholder="John Doe" />
            </Field>
            <Field w={{base: "100%", lg: "50%"}} label="Email"  errorText="This is not a valid email">
              <Input bg={"--white"} borderRadius={0} color={"black"} type="email" placeholder="me@example.com" />
            </Field>
          </HStack>
          <Field w={"100%"} label="Message"  errorText="No message has been entered">
            <Textarea bg={"--white"} borderRadius={0} color={"black"} h={"15em"} placeholder="Enter message..." />
          </Field>
          <Button w={"100%"} py={5} mt={2} bg={"--gold"} fontSize={"lg"} _hover={{opacity: 0.8}} color={"white"}>Send Message</Button>
        </VStack>
      </HStack>
      <Footer/>
    </VStack>
  )
}

export default Contact
