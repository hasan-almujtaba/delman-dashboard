import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'

export const navigation = [
  { icon: Squares2X2Icon, title: 'Dashboard', link: '/' },
  { icon: UsersIcon, title: 'Users', link: '/users' },
  { icon: UserPlusIcon, title: 'Registration', link: '/register' },
  { icon: MagnifyingGlassIcon, title: 'Search', link: '/search' },
]
