import { CommonIcon } from "../ui";

const sidebarAdminRoutes = [
    {
        path: '/admin',
        name: 'Trang chủ',
        icon: CommonIcon.Dashboard,
    },
    {
        path: '/admin/post',
        name: 'Tuyển dụng',
        icon: CommonIcon.Newspaper,
    },
    {
        path: '/admin/category',
        name: 'Lĩnh vực',
        icon: CommonIcon.Feed,
    },
    {
        path: '/admin/company',
        name: 'Doanh nghiệp',
        icon: CommonIcon.Business,
    },
    {
        path: '/admin/revenue',
        name: 'Doanh thu',
        icon: CommonIcon.LocalAtm,
    },
    {
        path: '/admin/user',
        name: 'Người dùng',
        icon: CommonIcon.Group,
    },
];

export {
    sidebarAdminRoutes
}