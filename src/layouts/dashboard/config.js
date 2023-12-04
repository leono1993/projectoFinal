import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import PlayIcon from '@heroicons/react/24/solid/PlayIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import WrenchIcon from '@heroicons/react/24/solid/WrenchIcon';
import { SvgIcon } from '@mui/material';
import QuestionMarkCircleIcon from '@heroicons/react/24/solid/QuestionMarkCircleIcon'

export const items = [
  
  {
    title: 'Índice',
    path: '/indice',
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon/>
      </SvgIcon>
    )
  },
  {
    title: 'Portada',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Semanas',
    path: '/semanas',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Curiosidades',
    path: '/curiosidades',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Información del Estudiante',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Videos',
    path: '/videos',
    icon: (
      <SvgIcon fontSize="small">
        <PlayIcon />
      </SvgIcon>
    )
  }, 
  {
    title: 'Herramientas',
    path: '/Herramientas',
    icon: (
      <SvgIcon fontSize="small">
        <WrenchIcon />
      </SvgIcon>
    )
  }
];
