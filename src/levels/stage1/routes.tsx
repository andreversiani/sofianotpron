import { Navigate } from "react-router-dom";
import EyeInTheSky from "./eyeinthesky";
import Venus from "./venus";
import Atena from "./atena"
import EstrelaCadente from "./estrelaCadente";

const atena = [
    {
        path: '/pessoa/sofia',
        element: <EstrelaCadente />,
    },
    {
        path: '/pessoa/sabedoria',
        element: <Atena />,
    },
    {
        path: '/pessoa/atena',
        element: <h1>Pessoa?</h1>,
    },
    {
        path: '/deusa/atena',
        element: <Navigate to='/deus/atena' replace/>,
    }
]

const venus = [
    {
        path: '/deus/atena',
        element: <Venus />,
    },
    {
        path: '/deus/venus',
        element: <h1>Achou que ia ser tão fácil?</h1>,
    },
    {
        path: '/deus/lucifer',
        element: <h1>Deus?</h1>,
    },
    {
        path: '/demonio/lucifer',
        element: <Navigate to='/deus/eyeinthesky' replace />,
    },
    {
        path: '/diabo/lucifer',
        element: <Navigate to='/demonio/lucifer' replace/>,
    },
    {
        path: '/anjo/lucifer',
        element: <Navigate to='/demonio/lucifer' replace/>,
    },
]

const eyeInTheSky = [
    {
        path: '/deus/eyeinthesky',
        element: <EyeInTheSky />,
    },
]

export const stage1Routes = [
    ...atena,
    ...venus,
    ...eyeInTheSky
]