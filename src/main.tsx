import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import store from './components/store/store.ts'
import { Provider } from 'react-redux'
import AboutUs from './components/pages/AboutUs.tsx'
import Carrier from './components/pages/Carrier.tsx'
import Activities from './components/pages/Activities.tsx'
//import Nutrition from './components/pages/Nutrition.tsx'
import PersonalTraining from './components/pages/PersonalTraining.tsx'
import RecoveryTherpy from './components/pages/RecoveryTherpy.tsx'
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
        path : '/personal-training',
        element : <PersonalTraining/>
      },
      {
        path : '/activities',
        element : <Activities/>
      },
      {
        path : '/recovery-therapy',
        element : <RecoveryTherpy/>
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
