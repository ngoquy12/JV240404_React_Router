import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const CourseDetail = React.lazy(() => import("../pages/CourseDetail"));
const ListCource = React.lazy(() => import("../pages/ListCource"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const AdminIndex = React.lazy(() => import("../pages/AdminIndex"));
const ManagerUser = React.lazy(() => import("../pages/ManagerUser"));
const ManagerProduct = React.lazy(() => import("../pages/ManagerProduct"));
const Dashborad = React.lazy(() => import("../pages/Dashborad"));
const Login = React.lazy(() => import("../pages/Login"));

const LazyLoader = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LazyLoader children={<Home />} />,
  },
  {
    path: "/about",
    element: <LazyLoader children={<About />} />,
  },
  {
    path: "/contact",
    element: <LazyLoader children={<Contact />} />,
  },
  {
    path: "/list-cource",
    element: <LazyLoader children={<ListCource />} />,
  },
  {
    path: "/course-detail/:id",
    element: <LazyLoader children={<CourseDetail />} />,
  },
  {
    path: "/login",
    element: <LazyLoader children={<Login />} />,
  },
  {
    path: "*",
    element: <LazyLoader children={<NotFound />} />,
  },
  {
    path: "/admin",
    element: <LazyLoader children={<AdminIndex />} />,
    children: [
      {
        index: true,
        element: <LazyLoader children={<Dashborad />} />,
      },
      {
        path: "manager-user",
        element: <LazyLoader children={<ManagerUser />} />,
      },
      {
        path: "manager-product",
        element: <LazyLoader children={<ManagerProduct />} />,
      },
    ],
  },
]);

export default routes;
