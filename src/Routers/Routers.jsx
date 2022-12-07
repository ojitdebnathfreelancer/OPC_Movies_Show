import Booking from "../Components/Movies/Movie/Booking/Booking/Booking";
import Movies from "../Components/Movies/Movies/Movies";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Movies></Movies>
            },
            {
                path:'/shows/:id',
                loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`),
                element:<Booking></Booking>
            }
        ],
    }
]);