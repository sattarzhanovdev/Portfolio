import { Pages } from "../pages"

import homeIcon from '../icons/home.svg'
import homeIconActive from '../icons/home active.svg'
import portfolioIcon from '../icons/portfolio.svg'
import portfolioIconActive from '../icons/portfolio active.svg'
import blogIcon from '../icons/threedots.svg'
import blogIconActive from '../icons/threedots active.svg'

import front from '../icons/front.svg'
import project from '../icons/project.svg'
import { Images } from "../images"


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
    title: 'Stacks',
    route: '/stacks/',
    icon: blogIcon,
    activeIcon: blogIconActive
  }
]

export const StacksList = [
  {
    id: 1, 
    title: 'HTML5',
    percent: 100,
    direction: 'Frontend'
  },
  {
    id: 2, 
    title: 'CSS3',
    percent: 100,
    direction: 'Frontend'
  },
  {
    id: 3, 
    title: 'JavaScript',
    percent: 90,
    direction: 'Frontend'
  },
  {
    id: 4, 
    title: 'React JS',
    percent: 90,
    direction: 'Frontend'
  },
  {
    id: 5, 
    title: 'Wordpress',
    percent: 70,
    direction: 'Frontend'
  },
  {
    id: 6, 
    title: 'UX/UI',
    percent: 90,
    direction: 'Frontend'
  },
  {
    id: 7, 
    title: 'React Native',
    percent: 90,
    direction: 'Frontend'
  },
  {
    id: 8, 
    title: 'Python',
    percent: 60,
    direction: 'Backend'
  },
  {
    id: 9, 
    title: 'Node JS',
    percent: 80,
    direction: 'Backend'
  },
  {
    id: 10, 
    title: 'Django Rest',
    percent: 60,
    direction: 'Backend'
  },
  {
    id: 11, 
    title: 'SCRUM',
    percent: 80,
    direction: 'Project management'
  },
  {
    id: 12, 
    title: 'Agile',
    percent: 80,
    direction: 'Project management'
  },
  {
    id: 13, 
    title: 'Jira / Youtrack / Trello',
    percent: 100,
    direction: 'Project management'
  },
  {
    id: 14, 
    title: 'Arduino',
    percent: 100,
    direction: 'Arduino'
  },
  {
    id: 15, 
    title: 'ESP32',
    percent: 100,
    direction: 'Arduino'
  },
  {
    id: 16, 
    title: 'C++',
    percent: 80,
    direction: 'Arduino'
  },
  {
    id: 17, 
    title: 'Python',
    percent: 80,
    direction: 'Arduino'
  },
]

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Home />,
  },
  {
    id:2,
    route: '/portfolio/',
    page: <Pages.Portfolio />,
  },
  {
    id:3, 
    route: '/stacks/',
    page: <Pages.Stacks />
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


export const Projects = [
  {
    id: 1, 
    title: 'TechnoFoods',
    image: Images.TechnoFoods,
    image2: Images.TechnoFoods1 ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://technofoods.kg'
  },
  {
    id: 2, 
    title: 'Turkmed',
    image: Images.Turkmed,
    image2: Images.Turkmed1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: 'https://turkmed-web.netlify.app/'
  },
  {
    id: 3, 
    title: 'Kelvin',
    image: Images.Kelvin,
    image2: Images.Kelvin1  ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://kelvin-store.netlify.app/'
  },
  {
    id: 4, 
    title: 'GSR',
    image: Images.GSR,
    image2: Images.GSR1 ,
    stacks: [
      'Design',
      'Frontend',
    ],
    link: ''
  },
  {
    id: 5, 
    title: 'ВШМОП',
    image: Images.VSHMOP,
    image2: Images.VSHMOP1  ,
    stacks: [
      'Design',
      'Frontend',
    ],
    link: ''
  },
  {
    id: 6, 
    title: 'Finprogress',
    image: Images.Finprogress,
    image2: Images.Finprogress1 ,
    stacks: [
      'Frontend'
    ],
    link: 'https://finprogress.netlify.app/'
  },
  {
    id: 7, 
    title: 'CityFish',
    image: Images.Cityfish,
    image2: Images.Cityfish1  ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://cityfishh.ru/'
  },
  {
    id: 8, 
    title: 'CityFish - Admin',
    image: Images.CityfishAdmin,
    image2: Images.CityfishAdmin1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: ''
  },
  {
    id: 9, 
    title: 'До границы',
    image: Images.DoGranicy,
    image2: Images.DoGranicy1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: 'https://do-granicy.ru/'
  },
  {
    id: 10, 
    title: 'Amway',
    image: Images.Amway,
    image2: Images.Amway1 ,
    stacks: [
      'Frontend',
      'Backend' 
    ],
    link: 'https://amway-site.netlify.app/'
  }
]