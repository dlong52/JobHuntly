import {
    AdminCategoryPage,
    AdminCompanyPage,
    AdminHomePage,
    AdminPostPage,
    AdminProfilePage,
    AdminRevenuePage,
    AdminUserPage
} from "../pages"
import { AdminLayout } from "../layouts"

const privateRoutes = [
    {
        path: "/",
        component: AdminHomePage,
        layout: AdminLayout
    },
    {
        path: '/post',
        component: AdminPostPage,
        layout: AdminLayout
    },
    {
        path: '/category',
        component: AdminCategoryPage,
        layout: AdminLayout
    },
    {
        path: '/company',
        component: AdminCompanyPage,
        layout: AdminLayout
    },
    {
        path: '/revenue',
        component: AdminRevenuePage,
        layout: AdminLayout
    },
    {
        path: '/user',
        component: AdminUserPage,
        layout: AdminLayout
    },
    {
        path: '/profile',
        component: AdminProfilePage,
        layout: AdminLayout
    },
]
export default privateRoutes