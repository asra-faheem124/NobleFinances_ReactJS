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
