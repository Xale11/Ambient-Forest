import { Drawer as ChakraDrawer, Icon, Portal } from "@chakra-ui/react"
import { forwardRef } from "react"
import { IoMdClose } from "react-icons/io"

interface DrawerContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  offset?: ChakraDrawer.ContentProps["padding"]
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
            {children}
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    )
  },
)

export const DrawerCloseTrigger = forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props) {
  return (
    <ChakraDrawer.CloseTrigger
      {...props}
      asChild
    >
      <Icon fontSize={"4xl"} py={1}>
        <IoMdClose />
      </Icon>
    </ChakraDrawer.CloseTrigger>
  )
})

export const DrawerTrigger = ChakraDrawer.Trigger
export const DrawerRoot = ChakraDrawer.Root
export const DrawerFooter = ChakraDrawer.Footer
export const DrawerHeader = ChakraDrawer.Header
export const DrawerBody = ChakraDrawer.Body
export const DrawerBackdrop = ChakraDrawer.Backdrop
export const DrawerDescription = ChakraDrawer.Description
export const DrawerTitle = ChakraDrawer.Title
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger
