import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiChartBarDuotone,
  PiSquaresFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiRocketLaunchDuotone,
  PiShootingStarDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Ecran Principal',
  },
  // label end
  {
    name: 'Accueil',
    href: '/',
    // href: routes.file.dashboard,
    icon: <PiShootingStarDuotone />,
  },
  {
    name: 'Statistiques',
    //href: '/statistiques',
    href: routes.stats,
    icon: <PiChartBarDuotone />,
  },
  // label start
  {
    name: 'Messages Push',
  },
  // label end
  {
    name: 'Campagnes',
    href: routes.campagnes.list,
    icon: <PiRocketLaunchDuotone />,
  },
  // label start
  {
    name: 'Parametrage',
  },
  // label end
  {
    name: 'Roles et Permissions',
    href: routes.roles.list,
    icon: <PiSquaresFourDuotone />,
  },
  {
    name: 'Categories',
    href: routes.categories.list,
    icon: <PiFeatherDuotone />,
  },
  {
    name: 'Base de données',
    href: routes.donnees.list,
    icon: <PiChartLineUpDuotone />,
  }
];
