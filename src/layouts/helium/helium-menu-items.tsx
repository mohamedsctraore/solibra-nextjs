import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartFill,
  PiHeadsetFill,
  PiPackageFill,
  PiChartBarFill,
  PiFileImageFill,
  PiCurrencyDollarFill,
  PiSquaresFourFill,
  PiGridFourFill,
  PiFeatherFill,
  PiChartLineUpFill,
  // PiImageFill,
  PiMapPinLineFill,
  PiUserGearFill,
  PiBellSimpleRingingFill,
  PiUserFill,
  PiEnvelopeSimpleOpenFill,
  PiStepsFill,
  PiCreditCardFill,
  PiStackFill,
  PiTableFill,
  PiBrowserFill,
  PiBoundingBoxFill,
  PiHourglassSimpleFill,
  PiUserCircleFill,
  PiShootingStarFill,
  PiRocketLaunchFill,
  PiFolderLockFill,
  PiBinocularsFill,
  PiHammerFill,
  PiNoteBlankFill,
  PiUserPlusFill,
  PiShieldCheckFill,
  PiLockKeyFill,
  PiChatCenteredDotsFill,
  PiMagicWandFill,
  PiCalendarPlusFill,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'File Manager',
    href: '/',
    // href: routes.file.dashboard,
    icon: <PiFileImageFill />,
  },
  {
    name: 'Logistics',
    icon: <PiPackageFill />,
  },
  {
    name: 'E-Commerce',
    icon: <PiShoppingCartFill />,
  },
  {
    name: 'Analytics',
    icon: <PiChartBarFill />,
  },
  {
    name: 'Support',
    icon: <PiHeadsetFill />,
  },
  // label start
  {
    name: 'Apps Kit',
  },
  // label end
  {
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCartFill />,
    dropdownItems: [
      {
        name: 'Products',
      },
      {
        name: 'Product Details',
      },
      {
        name: 'Create Product',
      },
      {
        name: 'Edit Product',
      },
      {
        name: 'Categories',
      },
      {
        name: 'Create Category',
      },
      {
        name: 'Edit Category',
      },
      {
        name: 'Orders',
      },
      {
        name: 'Order Details',
      },
      {
        name: 'Create Order',
      },
      {
        name: 'Edit Order',
      },
      {
        name: 'Reviews',
      },
      {
        name: 'Shop',
      },
      {
        name: 'Cart',
      },
      {
        name: 'Checkout & Payment',
      },
    ],
  },
  {
    name: 'Support',
    href: '#',
    icon: <PiHeadsetFill />,
    dropdownItems: [
      {
        name: 'Inbox',
      },
      {
        name: 'Snippets',
      },
      {
        name: 'Templates',
      },
    ],
  },
  {
    name: 'Invoice',
    href: '#',
    icon: <PiCurrencyDollarFill />,
    dropdownItems: [
      {
        name: 'List',
      },
      {
        name: 'Details',
      },
      {
        name: 'Create',
      },
      {
        name: 'Edit',
      },
    ],
  },
  {
    name: 'Logistics',
    href: '#',
    icon: <PiPackageFill />,
    dropdownItems: [
      {
        name: 'Shipment List',
      },
      {
        name: 'Shipment Details',
      },
      {
        name: 'Create Shipment',
      },
      {
        name: 'Edit Shipment',
      },
      {
        name: 'Customer Profile',
      },
      {
        name: 'Tracking',
      },
    ],
  },
  {
    name: 'File Manager',
    icon: <PiFileImageFill />,
  },
  {
    name: 'Event Calendar',
    icon: <PiCalendarPlusFill />,
  },
  {
    name: 'Roles & Permissions',
    icon: <PiFolderLockFill />,
  },
  // label start
  {
    name: 'Widgets',
  },
  // label end
  {
    name: 'Cards',
    icon: <PiSquaresFourFill />,
  },
  {
    name: 'Icons',
    icon: <PiFeatherFill />,
  },
  {
    name: 'Charts',
    icon: <PiChartLineUpFill />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImageFill />,
  // },
  {
    name: 'Maps',
    icon: <PiMapPinLineFill />,
  },
  // label start
  {
    name: 'Forms',
  },
  // label end
  {
    name: 'Account Settings',
    icon: <PiUserGearFill />,
  },
  {
    name: 'Notification Preference',
    icon: <PiBellSimpleRingingFill />,
  },
  {
    name: 'Personal Information',
    icon: <PiUserFill />,
  },
  {
    name: 'Newsletter',
    icon: <PiEnvelopeSimpleOpenFill />,
  },
  {
    name: 'Multi Step',
    icon: <PiStepsFill />,
  },
  {
    name: 'Payment Checkout',
    icon: <PiCreditCardFill />,
  },
  // label start
  {
    name: 'Tables',
  },
  // label end
  {
    name: 'Basic',
    icon: <PiGridFourFill />,
  },
  {
    name: 'Collapsible',
    icon: <PiStackFill />,
  },
  {
    name: 'Enhanced',
    icon: <PiTableFill />,
  },
  {
    name: 'Sticky Header',
    icon: <PiBrowserFill />,
  },
  {
    name: 'Pagination',
    icon: <PiBoundingBoxFill />,
  },
  {
    name: 'Search',
    icon: <PiHourglassSimpleFill />,
  },
  // label start
  {
    name: 'Pages',
  },
  // label end
  {
    name: 'Search & Filters',
    href: '#',
    icon: <PiMagicWandFill />,
    dropdownItems: [
      {
        name: 'Real Estate',
      },
      {
        name: 'NFT',
      },
    ],
  },
  {
    name: 'Profile',
    icon: <PiUserCircleFill />,
  },
  {
    name: 'Welcome',
    icon: <PiShootingStarFill />,
  },
  {
    name: 'Coming soon',
    icon: <PiRocketLaunchFill />,
  },
  {
    name: 'Access Denied',
    icon: <PiFolderLockFill />,
  },
  {
    name: 'Not Found',
    icon: <PiBinocularsFill />,
  },
  {
    name: 'Maintenance',
    icon: <PiHammerFill />,
  },
  {
    name: 'Blank',
    icon: <PiNoteBlankFill />,
  },

  // label start
  {
    name: 'Authentication',
  },
  // label end
  {
    name: 'Sign Up',
    href: '#',
    icon: <PiUserPlusFill />,
    dropdownItems: [
      {
        name: 'Modern Sign up',
      },
      {
        name: 'Vintage Sign up',
      },
      {
        name: 'Trendy Sign up',
      },
      {
        name: 'Elegant Sign up',
      },
      {
        name: 'Classic Sign up',
      },
    ],
  },
  {
    name: 'Sign In',
    href: '#',
    icon: <PiShieldCheckFill />,
    dropdownItems: [
      {
        name: 'Modern Sign in',
      },
      {
        name: 'Vintage Sign in',
      },
      {
        name: 'Trendy Sign in',
      },
      {
        name: 'Elegant Sign in',
      },
      {
        name: 'Classic Sign in',
      },
    ],
  },
  {
    name: 'Forgot Password',
    href: '#',
    icon: <PiLockKeyFill />,
    dropdownItems: [
      {
        name: 'Modern Forgot password',
      },
      {
        name: 'Vintage Forgot password',
      },
      {
        name: 'Trendy Forgot password',
      },
      {
        name: 'Elegant Forgot password',
      },
      {
        name: 'Classic Forgot password',
      },
    ],
  },
  {
    name: 'OTP Pages',
    href: '#',
    icon: <PiChatCenteredDotsFill />,
    dropdownItems: [
      {
        name: 'Modern OTP page',
      },
      {
        name: 'Vintage OTP page',
      },
      {
        name: 'Trendy OTP page',
      },
      {
        name: 'Elegant OTP page',
      },
      {
        name: 'Classic OTP page',
      },
    ],
  },
];
