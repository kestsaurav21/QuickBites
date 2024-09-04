import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import menuList from './utils/mockData';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(menuList);
  },[])


  return (
    <>
    <Header/>
    <Body menuData={data}/>
    <Footer/>
    </>
  )
}







export default App


