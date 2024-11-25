import { Fragment } from "react";
import {
  CompanyPage,
  CreateCVPage,
  CvManagementPage,
  FindJobPage,
  HomePage,
  SignInPage,
  SignUpPage,
  SignUpHrPage,
  NotFoundPage,
  ProfileSettingPage
} from "@/pages";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/sign-in",
    component: SignInPage,
    layout: null,
  },
  {
    path: "/sign-up",
    component: SignUpPage,
    layout: null,
  },
  {
    path: "/sign-up-hr",
    component: SignUpHrPage,
    layout: null,
  },
  {
    path: "/jobs",
    component: FindJobPage,
  },
  {
    path: "/cv-template",
    component: CvManagementPage,
  },
  {
    path: "/cv-template/:id",
    component: CreateCVPage,
  },
  {
    path: "/company",
    component: CompanyPage,
  },
  {
    path: "/profile",
    component: ProfileSettingPage,
  },
  {
    path: "/",
    component: Fragment,
  },
  {
    path: "*",
    component: NotFoundPage,
    layout: null,
  },
];
export default publicRoutes;
