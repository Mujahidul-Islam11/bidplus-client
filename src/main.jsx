import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainLayOut/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AddJobs from './Pages/AddJobs.jsx';
import MyPostedJobs from './Pages/MyPostedJobs.jsx';
import MyBid from './Pages/MyBid.jsx';
import BidRequest from './Pages/BidRequest.jsx';
import AuthProvider from './Pages/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addJobs',
        element:<AddJobs></AddJobs>
      },
      {
        path:'/postedJobs',
        element:<MyPostedJobs></MyPostedJobs>
      },
      {
        path:'/myBids',
        element:<MyBid></MyBid>
      },
      {
        path:'/bidRequest',
        element:<BidRequest></BidRequest>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
