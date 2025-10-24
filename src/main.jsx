import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomeComponent } from './HomeComponent/HomeComponent.jsx';
import { ServicesComponent } from './ServicesComponent/ServicesComponent.jsx';
import { AppLayout } from './aPPlAYOUT.JSX';
import BookingsComponent from './BookingsComponent/BookingsComponent.jsx';

{<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>}

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomeComponent
      },
      {
        path: '/services',
        Component: ServicesComponent
      },
      {
        path: '/bookings',
        Component: BookingsComponent
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />,
  </StrictMode>,
)
