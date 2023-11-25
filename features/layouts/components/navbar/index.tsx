import { Flex, Text } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Flex
      px={14}
      height="60px"
      boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);"
      align="center"
      zIndex="10"
      pos="relative"
    >
      <Text
        fontSize="large"
        fontWeight="bold"
      >
        delman.io
      </Text>
    </Flex>
  )
}
