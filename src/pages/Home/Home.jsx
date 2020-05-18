import React, { useEffect, useState } from "react";

import { useLocation, Link } from "react-router-dom";

import { getTrending } from "../../helpers/api";
import routers from "../../utils/routers.js";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { Container, List, Item, Title } from "./Home.styles";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const location = useLocation();
  const { MOVIES } = routers;

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
              movies.map(({ id, title }) => (
                <Item key={id}>
                  <Link
                    to={{
                      pathname: `${MOVIES}/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
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
