import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AdminHome from './components/Admin/AdminHome.jsx'
import MeetingList2 from './components/Meeting/MeetingList2.jsx'
import Login from './components/Admin/Login.jsx'
import ServiceList from './components/Services/ServicesList.jsx'
import AdminPage from './components/Admin/AdminPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error 404</div>

  },
  // {
  //   path: '/admin/services',
  //   element: <ServiceList />,
  //   errorElement: <div>error 404</div>

  // },
  // {
  //   path: '/admin/meetings',
  //   element: <MeetingList2 />,
  //   errorElement: <div>error 404</div>

  // },
  {
    path: '/admin',
    element: <AdminPage />,
    errorElement: <div>error Admin</div>,
    children: [
      {
        path: 'services',
        element: <ServiceList/>,
        errorElement: <div>error ServicesList not found</div>
      },
      // {
      //   path: '',
      //   element: <ServiceList/>,
      //   errorElement: <div>error ServicesList not found</div>
      // },
      {
        path: 'meeting',
        element: <div><MeetingList2/></div>,
        errorElement: <div>error MeetingList not found</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)





