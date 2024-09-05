import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import menuList from './utils/mockData';
import Footer from './components/Footer/Footer';


function App() {
  const data = menuList;

  return (
    <>
    <Header/>
    <Body menuData={data}/>
    <Footer/>
    </>
  )
}


export default App

// export const appRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "/",
//         element: <Body menuData={[]}/>
//       },
//       {
//         path: "/about",
//         element:<About/>

//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/cart",
//         element: <Cart/>
//       }
//     ],
//     errorElement: <Error/>
//   }
// ])









