import {Col, Container, Form, Row, Card} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import getMovie from '../api/getMovies';

async function  Movies() {
   
    const peliculas = [
        { id: 1, titulo: 'Back to the Future', genero: "scifi" ,img:'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
        { id: 2, titulo: 'Top Gun', genero: "accion" ,img:'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'},
        { id: 3, titulo: 'Star Wars', genero: "scifi",img:'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg' },
        { id: 4, titulo: 'Revenge of the Nerds', genero: "comedia",img:'https://m.media-amazon.com/images/M/MV5BODU1NzM4NTA4Nl5BMl5BanBnXkFtZTgwMTkxMzcxMTE@._V1_SX300.jpg' },
        { id: 5, titulo: 'Police Academy', genero: "comedia",img:'https://m.media-amazon.com/images/M/MV5BMjNiMWVhNjAtMzgyYS00NzRhLWJmNGUtNzdiOGFhMmY5NDUwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' },
        { id: 6, titulo: 'Avatar', genero: "scifi",img:'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'}
      ];

      const [currentMovie, setCurrentMovie] = useState('');
      const [movieData, setMovieData] = useState(null);
    
      const numeroAleatorio = Math.floor(Math.random() * 6); // Genera un número entre 0 y 5

      useEffect(() => {
        setCurrentMovie(peliculas[numeroAleatorio]);
        const fetchData = async () => {
          try {
            let dataResponse = await getMovie(currentMovie);
            setMovieData(dataResponse);
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        };
      }, []);

      const GetMovieTitle = (e) => {
        const selected = e.target.value;
        setCurrentMovie(selected);
      };
    
      return (
        <div>
          <Container>
            <Row>
              <Col className='p-5'>
                <Form.Select
                  aria-label='Default select example'
                  className='form-control text-center'
                  onChange={GetMovieTitle}
                >
                  {peliculas.map((element, index) => (
                    <option key={index} value={element.titulo}>
                      {element.titulo.toUpperCase()}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={movieData?.Poster || 'holder.js/100px180'} />
                <Card.Body>
                  <Card.Title>{currentMovie}</Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      );
    };
    
    export default Movies;