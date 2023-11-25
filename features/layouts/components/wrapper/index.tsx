'use client'

import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { Sidebar } from 'features/layouts'

export const Wrapper = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <Flex minHeight="calc(100vh - 60px)">
      <Sidebar
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />

      <Box
        px="20px"
        py="14px"
        flex="1 1 0%;"
      >
        kamehameha
      </Box>
    </Flex>
  )
}
