'use client'

import { Box, List, ListItem, Text } from '@chakra-ui/react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { navigation } from './data'
import { TProps } from './type'

export const Sidebar = (props: TProps) => {
  const { isOpen, toggleIsOpen } = props

  return (
    <Box
      bg="gray.100"
      width={isOpen ? '20%' : '76px'}
      overflow="hidden"
      transition="width 0.3s ease"
    >
      <List>
        <ListItem
          px="24px"
          h="60px"
          display="flex"
          alignItems="center"
          _hover={{
            bg: 'gray.200',
            color: 'blue.500',
            borderColor: 'blue.500',
          }}
          cursor="pointer"
          fontWeight="semibold"
          onClick={toggleIsOpen}
          transition="all 0.3s ease"
          borderLeft="3px solid"
          borderColor="transparent"
        >
          <Bars3BottomLeftIcon
            height={24}
            width={24}
          />

          {isOpen && <Text ml="16px">Menu</Text>}
        </ListItem>

        {navigation.map((item) => (
          <ListItem
            key={item.title}
            px="24px"
            h="60px"
            display="flex"
            alignItems="center"
            _hover={{
              bg: 'gray.200',
              color: 'blue.500',
              borderColor: 'blue.500',
            }}
            cursor="pointer"
            fontWeight="semibold"
            transition="all 0.3s ease"
            borderLeft="3px solid"
            borderColor="transparent"
            as={Link}
            href={item.link}
          >
            <item.icon
              height={24}
              width={24}
            />

            {isOpen && <Text ml="16px">{item.title}</Text>}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
