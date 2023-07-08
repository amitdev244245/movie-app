import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: false, msg: "Movie name is required" });
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("Hacker");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.total_results !== 0) {
                setIsLoading(false)
                setMovie(data.results)
            }
            else {
                setIsError({ show: true, msg: "Incorrect movie name / movie not found" })
                setIsLoading(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let timeClear = setTimeout(() => {
            getMovies(`${API_URL}&query=${query}`);
        }, 1000);
        return () => clearTimeout(timeClear);
    }, [query])

    return <AppContext.Provider value={{ isLoading, isError, movie, setQuery }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };