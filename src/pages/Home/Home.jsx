import React, { useEffect, useState } from "react";

import { useLocation, Link } from "react-router-dom";
import { castImg } from "../../utils/ImgApi";
import { getTrending } from "../../helpers/api";
import routers from "../../utils/routers.js";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { Container, List, Item, Title } from "./Home.styles";
import { Photo } from "../../Components/Cast/Cast.styles";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const location = useLocation();
  const { MOVIES } = routers;

  const foto = `${castImg}${movies.poster_path}`;

  console.log(foto);
  console.log(movies);

  useEffect(() => {
    getTrending()
      .then((response) => setMovies([...response.data.results]))
      .catch((error) => setError(error.response.data.status_message));
  }, []);

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {!error && (
        <Container>
          <Title>Trending today</Title>
          <List>
            {movies &&
              movies.map(({ id, poster_path }) => (
                <Item key={id}>
                  <Link
                    to={{
                      pathname: `${MOVIES}/${id}`,
                      state: { from: location },
                    }}
                  >
                    <Photo src={`${castImg}${poster_path}`} />
                  </Link>
                </Item>
              ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default Home;
