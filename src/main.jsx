import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Team from "./pages/team/Team.jsx"
import Services from './pages/service/Services.jsx';
import Project from './pages/project/Project.jsx';
import Blog from './pages/blog/Blog.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Layout/>,
      children:[
        {
          path: "",
          element:<Home/>
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path : "/service",
          element : <Services/>
        },
        {
          path : "/project",
          element : <Project/>
        },
        {
          path : "/team",
          element : <Team/>
        },
        {
          path : "blog",
          element : <Blog/>
        },
        {
          path : "contact",
          element : <Contact/>
        }
      ]

    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
