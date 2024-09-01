import { Calendar, CalendarClock, Car, HeartIcon, Info } from "lucide-react";
export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    icon: HeartIcon,
    label: "Loved Cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Info,
    label: "Manage you cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: CalendarClock,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];
