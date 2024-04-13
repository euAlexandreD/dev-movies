import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, DivInformations, ButtonDiv, PosterImg } from "./style"
import { ButtonRed, ButtonWhite } from "../../components/Button/Style"
import { getImages } from "../../utils/getImages"
import Slider from "../../components/Slider"

function Home() {

    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()

    useEffect(() => {

        async function getMovies() {
            const { data: { results
            } } = await api.get('/movie/popular')

            setMovie(results[1])
        }
        async function getTopMovies() {
            const { data: { results
            } } = await api.get('/movie/top_rated')

            setTopMovies(results)

            console.log(results)
        }

        async function getTopSeries() {
            const { data: { results
            } } = await api.get('/tv/top_rated')

            setTopMovies(results)

            console.log(results)
        }

        getTopMovies()
        getMovies()
        getTopSeries()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    <DivInformations>
                        <h1>{movie.title}</h1>
                        <h2>{movie.overview}</h2>
                        <ButtonDiv>
                            <ButtonRed red={true}>Assista agora</ButtonRed>
                            <ButtonWhite red={false}>Assista o trailer</ButtonWhite>
                        </ButtonDiv>
                    </DivInformations>
                    <PosterImg>
                        <img alt='Poster' src={getImages(movie.poster_path)} />
                    </PosterImg>
                </Background >
            )
            }
            {topMovies && <Slider info={topMovies} title="Top Filmes" />}
            {topSeries && <Slider info={topSeries} title="Top Series" />}
        </>
    )
}

export default Home



