import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import FilesIcon from '@/components/icons/files';
import TruckIcon from '@/components/icons/truck';
import ShopIcon from '@/components/icons/shop';
import AnalyticsCircularIcon from '@/components/icons/analytics-circular';
import WalkmanIcon from '@/components/icons/walkman';
import UserPlusIcon from '@/components/icons/user-plus';
import UserLockIcon from '@/components/icons/user-lock';
import LockExclamationIcon from '@/components/icons/lock-exclamation';
import LockWildCardIcon from '@/components/icons/lock-wild-card';
import DicesIcon from '@/components/icons/dices';
import GreenLeafIcon from '@/components/icons/green-leaf';
import PieChartCurrencyIcon from '@/components/icons/pie-chart-currency';
import MapMarkerWithPathIcon from '@/components/icons/map-marker-with-path';
import UserSettingsIcon from '@/components/icons/user-settings';
import NotificationSettingsIcon from '@/components/icons/notification-settings';
import UserInfoIcon from '@/components/icons/user-info';
import NewsletterAnnouncement from '@/components/icons/newsletter-announcement';
import MultiStepArrowIcon from '@/components/icons/multi-step-arrow';
import OnlinePaymentIcon from '@/components/icons/online-payment';
import ShoppingCartIcon from '@/components/icons/shopping-cart';
import WalkmanWithExclamationIcon from '@/components/icons/walkman-with-exclamation';
import ShipIcon from '@/components/icons/ship';
import FileSettingsIcon from '@/components/icons/file-settings';
import InvoiceIcon from '@/components/icons/invoice';
import TableBasicIcon from '@/components/icons/table-basic';
import TableCollapsibleIcon from '@/components/icons/table-collapsible';
import TableEnhancedIcon from '@/components/icons/table-enhanced';
import TableStickyHeaderIcon from '@/components/icons/table-sticky-header';
import ArrowBothDirectionIcon from '@/components/icons/arrow-both-direction';
import TableSearchIcon from '@/components/icons/table-search';
import MagnifyingWithBarIcon from '@/components/icons/magnifying-with-bar';
import UserAvatarIcon from '@/components/icons/user-avatar';
import ShootingStarIcon from '@/components/icons/shooting-star';
import RocketFlamingIcon from '@/components/icons/rocket-flaming';
import BadgeNotAllowedIcon from '@/components/icons/badge-not-allowed';
import MagnifyingWithCrossIcon from '@/components/icons/magnifying-with-cross';
import SettingsWarningIcon from '@/components/icons/settings-warning';
import PageBlankIcon from '@/components/icons/page-blank';
import CalenderIcon from '@/components/icons/calendar';
import FolderLockIcon from '@/components/icons/folder-lock';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
}

export interface DropdownItemType {
  name: string;
  icon: JSX.Element;
  href?: string;
  description?: string;
  subMenuItems?: SubMenuItemType[];
}

export type menuType = 'link' | 'collapse' | 'enhance';

export interface MenuItemsType {
  id: string;
  name: string;
  type: menuType;
  popoverContentClassName?: string;
  dropdownItems?: DropdownItemType[];
}

export const menuItems: MenuItemsType[] = [];
