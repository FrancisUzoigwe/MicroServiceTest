import {createBrowserRouter} from "react-router-dom"
import MainPage from "../Pages/MainPage"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    }
])