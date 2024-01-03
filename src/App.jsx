import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Menu from './components/menu';
import Home from "./pages/home"
import getEnviroment from './services/utils';
import { serviceData } from './services/data';
import BusinessPage from './pages/bussines';
import Dashboard from './pages/dashboad';
import Blog from "./pages/blog"
import { checkSesionUser } from './services/auth';
import BlogCreate from './pages/blog/Create';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/bussines/:id",
    element: <BusinessPage/>,
  },
  {
    path: "/blog/:id",
    element: <Blog/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/blog/create",
    element: <BlogCreate/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
function App() {
  useEffect(()=>{
    getEnviroment()
    checkSesionUser()
  }, [])
  return (
    <Provider store={store}>
     <RouterProvider router={router} />
     <footer>
        Una pagina de Nauthy Dev
     </footer>
    </Provider>
  )
}

export default App
