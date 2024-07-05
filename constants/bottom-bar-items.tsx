import {
  Home as HomeIcon,
  SearchNormal as SearchIcon,
  Scan as ScanIcon,
  Clock as HistoryIcon,
  User as ProfileIcon,
} from "iconsax-react-native";
export default [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/home",
    middle: false,
  },
  {
    name: "Search",
    icon: SearchIcon,
    href: "/search",
    middle: false,
  },
  {
    name: "Scanner",
    icon: ScanIcon,
    href: "/scan",
    middle: true,
  },
  {
    name: "History",
    icon: HistoryIcon,
    href: "/history",
    middle: false,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    href: "/profile",
    middle: false,
  },
];
