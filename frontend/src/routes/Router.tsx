import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "About", element: <About /> },
                { path: "Contact", element: <Contact /> },
            ]
        },
        {
            path: "*", element: <NotFound />,
        }
    ]
)

export default Router;