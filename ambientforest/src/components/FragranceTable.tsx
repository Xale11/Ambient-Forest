import { HStack, Icon, Table, Text } from "@chakra-ui/react"
import { Product } from "../types/types"
import { Link } from "react-router-dom"
import { GoLinkExternal } from "react-icons/go";

interface Props {
  products: Product[]
}

const FragranceTable = ({products}: Props) => {
  console.log(products)
  return (
    <Table.Root size={{base: "sm", md: "md"}} w={"90%"} bg={"--black"}>
      <Table.Header>
        <Table.Row bg={"--black"} borderBottom={"2px white solid"} fontSize={{base: "0.5em", md: "1em"}}>
          <Table.ColumnHeader textDecor={"underline"}>Product Name</Table.ColumnHeader>
          <Table.ColumnHeader textDecor={"underline"}>Season</Table.ColumnHeader>
          <Table.ColumnHeader textDecor={"underline"}>Base Note Frgrances</Table.ColumnHeader>
          <Table.ColumnHeader textDecor={"underline"}>Heart Note Frgrances</Table.ColumnHeader>
          <Table.ColumnHeader textDecor={"underline"}>Top Note Frgrances</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body >
        {products.map((product) => (
          <Table.Row bg={"--black"} key={product.productId} fontSize={{base: "0.5em", md: "1em"}} _hover={{opacity: 0.8, cursor: "pointer"}} transition={"300ms all ease-in-out"}>
            <Table.Cell _hover={{color: "--gold"}}>
              <Link to={`/product/${product.productType}/${product.productId}`}>
                <HStack wrap={"wrap"}>
                  <Text>{product.name}</Text>
                  <Icon>
                    <GoLinkExternal />
                  </Icon>
                </HStack>
              </Link>
            </Table.Cell>
            <Table.Cell>{product.season}</Table.Cell>
            <Table.Cell>{product.notes?.baseNotes?.content}</Table.Cell>
            <Table.Cell>{product.notes?.heartNotes?.content}</Table.Cell>
            <Table.Cell>{product.notes?.topNotes?.content}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export default FragranceTable
