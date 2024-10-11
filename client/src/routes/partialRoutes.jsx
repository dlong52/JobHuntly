import {
    HomeIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    BriefcaseIcon,
    BuildingOffice2Icon,
    NewspaperIcon
} from '@heroicons/react/24/outline';
const sidebarAdminRoutes = [
    {
        path: '/admin',
        name: 'Dashboard',
        icon: HomeIcon,
    },
    {
        path: '/admin/post',
        name: 'Post',
        icon: NewspaperIcon,
    },
    {
        path: '/admin/category',
        name: 'Category',
        icon: BriefcaseIcon,
    },
    {
        path: '/admin/company',
        name: 'Company',
        icon: BuildingOffice2Icon,
    },
    {
        path: '/admin/revenue',
        name: 'Revenue',
        icon: CurrencyDollarIcon,
    },
    {
        path: '/admin/profile',
        name: 'Users',
        icon: UserGroupIcon,
    },
];

export {
    sidebarAdminRoutes
}