import { React } from "react";
import ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form } from "react-bootstrap";
import getMovie from "../api/getMovies";
import Details from "./details";

const Movies = () => {
    const peliculas = [
        { id: 1, titulo: 'Back to the Future', genero: "scifi" ,img:'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
        { id: 2, titulo: 'Top Gun', genero: "accion" ,img:'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
        { id: 3, titulo: 'Star Wars', genero: "scifi",img:'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg' },
        { id: 4, titulo: 'Revenge of the Nerds', genero: "comedia",img:'https://m.media-amazon.com/images/M/MV5BODU1NzM4NTA4Nl5BMl5BanBnXkFtZTgwMTkxMzcxMTE@._V1_SX300.jpg' },
        { id: 5, titulo: 'Police Academy', genero: "comedia",img:'https://m.media-amazon.com/images/M/MV5BMjNiMWVhNjAtMzgyYS00NzRhLWJmNGUtNzdiOGFhMmY5NDUwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
        { id: 6, titulo: 'Avatar', genero: "scifi",img:'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'}
    ];
    let currentMovie = Math.floor(Math.random() * peliculas.length);
    let movie = peliculas[currentMovie];
    const fetchData = async (titulo='') => {
        try {
            titulo === '' ? movie = await getMovie(peliculas[currentMovie].titulo) : movie = await getMovie(titulo);
            movie = {
                id : movie.imdbID,
                titulo : movie.Title,
                genero : movie.Genre,
                img : movie.Poster
            }
            const movieDetail = ReactDOM.createRoot(document.getElementById('detail'));
            movieDetail.render(
                <Details props={movie}/>
            );
            document.getElementById('selectedOption').value = movie.titulo;
        } catch (err) {
            console.log(err);
        }
    };

    const getMovieTitle = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const selected =  el.getAttribute('value');  
        fetchData(selected);
    }      
    fetchData();
    return (
        <div>
            <Container>
                <Row>
                    <Col className="p-5">
                        <Form.Label>Seleccione una película.</Form.Label>
                        <Form.Select aria-label="Movies Selector" id="selectedOption" defaultValue={currentMovie} onChange={getMovieTitle}>
                            {peliculas.map((element, index) => (
                                <option key={index} value={element.titulo}>
                                    {element.titulo.toUpperCase()}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <div id="detail"></div>
                </Row>
            </Container>
        </div>
    );
};

export default Movies;