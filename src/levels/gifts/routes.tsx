import Gtank from "./gift1";
import WeirdFishes from "./gift2";

export const giftsRoutes = [
    {
        path: '/special/gift',
        element: <Gtank />,
    },
    {
        path: '/special/day',
        element: <WeirdFishes />,
    },
]