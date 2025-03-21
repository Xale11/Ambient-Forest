import { Heading, HStack, Icon, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { FaFacebookF, FaLinkedin, FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { IoCallOutline, IoMailOutline } from "react-icons/io5"
import { Toaster, toaster } from "../components/ui/toaster"
import { Field } from "../components/ui/field"
import { fetchFromDynamoDB } from "../api/awsApi"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { ContactPageData } from "../types/types"
import { customRedirect } from "../utils/redirect"
import { Helmet } from "react-helmet"
import axios from "axios"

const Contact = () => {

  const canonicalUrl = import.meta.env.VITE_DOMAIN

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [contactPage, setContactPage] = useState<ContactPageData>({
    page: "contact",
    email: "",
    instagram: "",
    linkedin: "",
    location: "",
    number: "",
    pinterest: "",
    twitter: "",
    facebook: "",
    tiktok: ""
  })

  const {data: pageData} = useQuery({queryKey: ["fetchContactData"], queryFn: () => fetchFromDynamoDB("/contact"), enabled: true})
  const { isFetching: formLoading, refetch: handleFormSubmit, status: formStatus, failureReason } = useQuery({queryKey: ["fetchContactData"], queryFn: () => submitForm(), enabled: false})

  const copyContent = (value: string) => {
    navigator.clipboard.writeText(value);
    toaster.create({
      title: "Copied To Clipboard",
      type: "success",
      action: {
        label: "close",
        onClick: () => {return},
      }
    })
  }

  const submitForm = async () => {
    setHasSubmitted(true)
    if (!name){
      throw new Error("Please Add A Name To The Form")
    } else if (!email){
      throw new Error("Please Add An Email To The Form")
    } else if (!message){
      throw new Error("Please Add A Message To The Form")
    }
  
    const res = await axios.post("https://getform.io/f/agddwynb", {
        message: name,
        email: email,
        name: name
    },
    { headers: {'Accept': 'application/json'}})
    .then(response => response)
    .catch(error => {
      console.error(error)
      throw new Error("There was a problem submitting your form. Please try again.")
    })

    return res
  }

  useEffect(() => {

    if (hasSubmitted) {
      if (formStatus === "error" && failureReason) {
        toaster.create({
          title: `${failureReason.message}`,
          type: "error",
          action: {
            label: "close",
            onClick: () => {},
          },
        });
        setHasSubmitted(false)
      } else if (!formLoading && formStatus === "success") {
        toaster.create({
          title: `Form Has Been Submitted`,
          type: "success",
          action: {
            label: "close",
            onClick: () => {},
          },
        });
        setHasSubmitted(false)
      }
    }
  }, [formLoading])

  useEffect(() => {
      if (pageData?.Items){
        setContactPage(pageData.Items[0])
      }
    }, [pageData])

  return (
    <>
      <Helmet>
        <title>Contact Us | Ambient Forest Candles</title>
        <meta name="description" content="Get in touch with Ambient Forest Candles for any questions about our products. Reach out via email, phone, or social media." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ambient Forest Candles" />
        <link rel="canonical" href={`${canonicalUrl}/contact`} />
      </Helmet>

      <VStack>
        <Navbar/>
        <Toaster/>
        <VStack mt={{base: "6em", lg: "10em"}}>
          <Heading size={"5xl"} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Get In Touch</Heading>
          <Text w={"100%"} textAlign={"center"} color={"black"}>Have any questions about our products? Please Use the contact form below.</Text>
          <HStack mt={5} gap={10}>
            <Icon onClick={() => customRedirect(`${contactPage.facebook}`)} color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
              <FaFacebookF />
            </Icon>
            <Icon onClick={() => customRedirect(`${contactPage.twitter}`)} color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
              <FaXTwitter />
            </Icon>
            <Icon onClick={() => customRedirect(`${contactPage.linkedin}`)} color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
              <FaLinkedin />
            </Icon>
            <Icon onClick={() => customRedirect(`${contactPage.pinterest}`)} color={"black"} size="lg" cursor={"pointer"} _hover={{color: "blackAlpha.400"}}>
              <FaPinterestP />
            </Icon>
          </HStack>
        </VStack>
        <HStack w={"100%"} my={7} px={{base: 0, lg: "5em"}} align={"start"} justify={"center"} wrap={{base: "wrap", lg: "nowrap"}} gap={{base: 10, lg: 2}}>
          <VStack w={{base: "100%", lg: "40%"}} align={{base: "center", lg: "start"}}>
            <Heading size={{base: "3xl", lg: "5xl"}} letterSpacing={"1px"} fontFamily={"Novecento"} color={"black"}>Contact Details</Heading>
            <Text fontSize={"sm"} w={"100%"} color={"black"} textAlign={{base: "center", lg: "start"}}>Have any questions about our products? Please Use the contact form below.</Text>
            <Button onClick={() => copyContent(contactPage.number)} px={5} py={7} bg={"--gold"} fontSize={"lg"} color={"white"} _hover={{pr: 10}} transition={"all 300ms ease-in-out"}>
              <IoCallOutline />
              <Text letterSpacing={"1px"}>{contactPage.number}</Text>
            </Button>
            <Button onClick={() => copyContent(contactPage.email)} px={5} py={7} bg={"--gold"} fontSize={"lg"} color={"white"} _hover={{pr: 10}} transition={"all 300ms ease-in-out"}>
              <IoMailOutline />
              <Text letterSpacing={"1px"}>{contactPage.email}</Text>
            </Button>
          </VStack>
          <VStack p={4} w={{base: "95%", lg: "60%"}} bg={"--black"} align={"start"}>
            <HStack w={"100%"} wrap={{base: "wrap", lg: "nowrap"}}>
            <Field w={{base: "100%", lg: "50%"}} label="Name" errorText="No name has been entered">
                <Input bg={"--white"} value={name} onChange={(e) => setName(e.target.value)} borderRadius={0} color={"black"} type="text" placeholder="John Doe" />
              </Field>
              <Field w={{base: "100%", lg: "50%"}} label="Email"  errorText="This is not a valid email">
                <Input bg={"--white"} value={email} onChange={(e) => setEmail(e.target.value)} borderRadius={0} color={"black"} type="email" placeholder="me@example.com" />
              </Field>
            </HStack>
            <Field w={"100%"} label="Message"  errorText="No message has been entered">
              <Textarea bg={"--white"} value={message} onChange={(e) => setMessage(e.target.value)} borderRadius={0} color={"black"} h={"15em"} placeholder="Enter message..." />
            </Field>
            <Button onClick={() => handleFormSubmit()} loading={formLoading} disabled={formLoading} w={"100%"} py={5} mt={2} bg={"--gold"} fontSize={"lg"} _hover={{opacity: 0.8}} color={"white"}>Send Message</Button>
          </VStack>
        </HStack>
        <Footer/>
      </VStack>
    </>
    
  )
}

export default Contact
