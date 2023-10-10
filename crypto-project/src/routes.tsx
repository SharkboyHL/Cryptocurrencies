import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import { NotFound } from "./Pages/NotFound";

const router = createBrowserRouter([
    {
        children:[
            {
                path:"/",
                element: <Home/>
            },
        ]
    }
])

export {router};