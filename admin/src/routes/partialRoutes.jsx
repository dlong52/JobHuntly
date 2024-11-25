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
        path: '/',
        name: 'Trang chủ',
        icon: HomeIcon,
    },
    {
        path: '/post',
        name: 'Tuyển dụng',
        icon: NewspaperIcon,
    },
    {
        path: '/category',
        name: 'Lĩnh vực',
        icon: BriefcaseIcon,
    },
    {
        path: '/company',
        name: 'Doanh nghiệp',
        icon: BuildingOffice2Icon,
    },
    {
        path: '/revenue',
        name: 'Doanh thu',
        icon: CurrencyDollarIcon,
    },
    {
        path: '/user',
        name: 'Người dùng',
        icon: UserGroupIcon,
    },
];

export {
    sidebarAdminRoutes
}