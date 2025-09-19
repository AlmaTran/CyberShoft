
import { lazy, Suspense } from "react";
// ----------------------------
import { createBrowserRouter } from "react-router-dom";
// -----------------------------
// import Home from "../pages/home/home";
const Search = lazy(() => import("../pages/search/search"));
const Detail = lazy(() => import("../pages/home/detail/detail"));
const Login = lazy(() => import("../pages/login/login"));
const Carts = lazy(() => import("../pages/carts/carts"));
const Profile = lazy(() => import("../pages/profile/profile"));
const Register = lazy(() => import("../pages/register/register"));
//------ Template sẽ rất nhẹ chúng ta không cần lazy load -------- 
import HomeTemplate from "../templates/home/home.template";
import AuthTemplate from "../templates/auth/auth.template";

// ------------- Lazy Load ---------------

const Home = lazy(() => import("../pages/home/home"));

//setup router
//path không được có "/" phía trước đường dẫn.

/**
 * url: /home/detail
 * 
 */

export const router = createBrowserRouter([
    {
        path: "",
        element: <HomeTemplate/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "search",
                element: (
                    // nếu file component chưa tải xong thì nó sẽ render componenet trong fallback
                    <Suspense fallback="Loading...?">
                        <Search/>
                    </Suspense>

                ),
                children: [
                    {
                        path: "abc",
                        element: <h1>Thuận</h1>
                    },
               
                ]

            },
            {
                path: "detail/:idDetail",//detail/1 , detail/2
                element: <Detail/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
    ,    
    {   
        path: "auth",
        element: <AuthTemplate/>,
        children: [
             {
                path: "carts",
                element: <Carts/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "register",
                element: <Register/> 

             }
        ]
    },
    // {
    //     path: "*", // nếu người dùng gõ một path khoogn trùng khớp với mọi 
    //     // setup trong router
    //     element: <h1>Page not found</h1>
    // },
   


]);