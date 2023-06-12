import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import Enrolls from "../pages/Dashboard/Enrolls/Enrolls";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddaClass from "../pages/Dashboard/AddaClass/AddaClass";
import InstructorRoutes from "./InstructorRoutes";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
 
const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <ClassesPage></ClassesPage>
        }
        
      ] 
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
          {
            path: "enrolls",
            element: <Enrolls></Enrolls>
          },
          {
            path: "allusers",
            element: <AllUsers></AllUsers>
          },
          
          // admin routes
          {
            path: "adminhome",
            element: <AdminHome></AdminHome>
          },

          //instructor routes
          {
            path: "addclass",
            element: <InstructorRoutes> <AddaClass></AddaClass> </InstructorRoutes>
          },
          {
            path: 'classes',
            element: <Classes></Classes>
          },
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          }
           

        ]
    },

    {
        path: "/*",
        element: <Error></Error>
    }

  ]);


export default router;