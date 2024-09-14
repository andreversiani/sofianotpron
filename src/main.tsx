import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { stage1Routes } from './levels/stage1/routes';
import { stage2Routes } from './levels/stage2/routes';
import { Home } from './components/Home';
import { stage3Routes } from './levels/stage3/routes';

const router = createBrowserRouter([
  ...stage1Routes,
  ...stage2Routes,
  ...stage3Routes,
  {
    path: '/',
    element: <Home />,
},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
