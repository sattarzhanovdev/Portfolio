import { Pages } from "../pages"

import homeIcon from '../icons/home.svg'
import homeIconActive from '../icons/home active.svg'
import portfolioIcon from '../icons/portfolio.svg'
import portfolioIconActive from '../icons/portfolio active.svg'
import blogIcon from '../icons/threedots.svg'
import blogIconActive from '../icons/threedots active.svg'

import front from '../icons/front.svg'
import project from '../icons/project.svg'


export const NavList = [
  {
    id: 1, 
    title: 'Home',
    route: '/',
    icon: homeIcon,
    activeIcon: homeIconActive
  },
  {
    id: 2,
    title: 'Portfolio',
    route: '/portfolio/',
    icon: portfolioIcon,
    activeIcon: portfolioIconActive
  },
  {
    id: 3, 
    title: 'Blog',
    route: '/blog/',
    icon: blogIcon,
    activeIcon: blogIconActive
  }
]

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Home />,
  }
]

export const MySkillsList = [
  {
    id: 1, 
    title: 'Web Development',
    desc: 'You will receive a customized plan for your fitness journey, and lots of support.',
    icon: front
  },
  {
    id: 2, 
    title: 'Project Management',
    desc: 'You will receive a customized plan for your fitness journey, and lots of support.',
    icon: project
  }
]