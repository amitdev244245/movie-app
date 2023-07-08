import { Routes, Route } from 'react-router-dom'
import MovieCard from './components/MovieCard'
import Page404 from './components/Page404'
import Header from './components/Header'
import Movies from './components/Movies'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="movie-app/" element={<Movies />} />
                <Route path="movie/:id" element={<MovieCard />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    )
}
