import React from 'react'
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const movies = [
  {
    title: "2001: Odisea del Espacio",
    description: "La supercomputadora HAL 9000 guía a un equipo de tres astronautas en un viaje en el que buscan descubrir los orígenes de la humanidad.",
    imageUrl: "https://es.web.img3.acsta.net/pictures/210/073/21007309_20130521161735454.jpg"
  },
  {
    title: "El Resplandor",
    description: "Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.",
    imageUrl: "https://clubdeescritura.com/wp-content/uploads/users-77/user-76125/2019/01/3-9932a940c2e54ad2698b78174e097f9d.jpg",
  },
  {
    title: "La Naranja Mecánica",
    description: "Un criminal en la Inglaterra del futuro pasa una serie de procesos experimentales para corregir sus impulsos violentos.",
    imageUrl: "https://www.ecartelera.com/carteles/3500/3515/001_m.jpg",
  }
]

const ListMovie = () => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} xs={5} md={4}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              imageUrl={movie.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default ListMovie;