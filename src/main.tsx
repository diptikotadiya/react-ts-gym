import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import store from './components/store/store.ts'
import { Provider } from 'react-redux'
import AboutUs from './components/pages/AboutUs.tsx'
import Membership from './components/pages/Membership.tsx'
import Carrier from './components/pages/Carrier.tsx'
import Offers from './components/pages/Offers.tsx'
import Nutrition from './components/pages/Nutrition.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element: <Home/>,
      },
      {
        path :'/about-us',
        element: <AboutUs/>
      },
      {
        path : '/membership',
        element : <Membership/>
      },
      {
        path : '/carrier',
        element : <Carrier/>
      },
      {
        path : '/offers',
        element : <Offers/>
      },
      {
        path : '/nutrition',
        element : <Nutrition/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
