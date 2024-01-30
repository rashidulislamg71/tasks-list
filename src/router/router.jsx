import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Pages/HomePage/Home';
import About from './../Pages/AboutUs/About';
import SignIn from './../Pages/SignInPage/SignIn';
import SignUp from './../Pages/SignUpPage/SignUp';
import NotFound from './../Pages/NotFoundPage/NotFound';


const myRouters = createBrowserRouter([
    {
        element : <App />,
        path : "/",
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }
]);

export default myRouters;