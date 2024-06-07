
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import { Navbar } from './components/Navbar.jsx'
import CardPage from "./pages/CardPage.jsx";


function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'card'} element={<CardPage/>}/>
      </Route>
    </Routes> 
    </>
  )
}

export default App
