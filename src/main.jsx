import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Job from './pages/AllJobs/job';
import AllJobs from './pages/AllJobs/AllJobs';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "all-jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "jobs/:id",
        element: <Job></Job>
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
