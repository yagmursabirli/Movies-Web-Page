import './App.css'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import MovieCard from './components/MovieCard'

function App() {
   
  
  return (
    <MovieProvider>
      <Navbar/>
   <main className='main-content flex flex-1 p-[32px] w-full flex-col'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
   </main>
   </MovieProvider>
  )
}

export default App
