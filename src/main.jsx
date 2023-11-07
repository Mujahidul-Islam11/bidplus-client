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
import PrivateRoute from './Pages/PrivateRoute.jsx';
import Details from './Pages/Details.jsx';
import UpdateDetails from './Pages/UpdateDetails.jsx';

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
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:'/postedJobs',
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/Jobs')
      },
      {
        path:'/myBids',
        element:<PrivateRoute><MyBid></MyBid></PrivateRoute>
      },
      {
        path:'/bidRequest',
        element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/JobsId/${params.id}`)
      },
      {
        path:'/updateDetails/:id',
        element:<PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/JobsId/${params.id}`)
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
