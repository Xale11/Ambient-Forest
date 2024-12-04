import { Spacer, VStack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '../components/ui/accordion'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <VStack minH={"100vh"}>
      <Navbar/>
      <VStack mt={{base: "6em", lg: "10em"}} mb={10} w={"80%"} color={"black"}>
        <AccordionRoot collapsible>
          {terms.map((item, i) => {
            return (
              <AccordionItem key={i} value={item.title}>
                <AccordionItemTrigger fontSize={"2xl"} px={2}>{item.title}</AccordionItemTrigger>
                <AccordionItemContent px={5}>{item.text}</AccordionItemContent>
              </AccordionItem>
            )
          })}
        </AccordionRoot>
      </VStack>
      <Spacer/>
      <Footer/>
    </VStack>
  )
}

const terms = [
  {
    title: "Terms Of Use",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
  {
    title: "Terms Of Sale",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
  {
    title: "Company Details",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
  {
    title: "UK Modern Slavery Act Discloure",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
  {
    title: "Privacy & Cookie Policy",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
  {
    title: "Privacy & Cookie Settings",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores repellat nam unde facilis, ad porro! Corporis, facilis. Labore veniam minus totam, alias non debitis consequuntur impedit ut qui maiores provident iure soluta itaque, sequi asperiores ducimus quam amet aut. Eaque et accusantium, facilis aliquid sequi rerum aperiam beatae ullam vitae vero minus laudantium ipsa suscipit dicta omnis commodi eligendi. Officiis quaerat nemo fugiat in ab fuga provident libero aperiam!"
  },
]

export default Terms
