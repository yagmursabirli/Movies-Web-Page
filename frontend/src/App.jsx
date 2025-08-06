import './App.css'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import MovieCard from './components/MovieCard'
import HomeV2 from "./pages/HomeV2";
import Detail from "./pages/Detail"; 
import SeeAll from './pages/SeeAll'



function App() {
   
  
    return (
    <MovieProvider>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/tv/:id" element={<Detail />} />
        <Route path="/person/:id" element={<Detail />} />
        <Route path="/see-all/:type" element={<SeeAll />} />

      </Routes>
    </MovieProvider>
  )
}

export default App
