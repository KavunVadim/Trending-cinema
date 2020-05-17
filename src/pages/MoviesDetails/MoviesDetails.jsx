import React, { useState, useEffect, lazy, Suspense } from "react";
import { getDetails } from "../../helpers/api";
import { poster } from "../../utils/ImgApi";
import imageNotFound from "../../helpers/ImgNotFound/default-profile.gif.png";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
  Route,
  NavLink,
} from "react-router-dom";

import {
  Container,
  Button,
  Poster,
  Title,
  Text,
  Subtitle,
  Section,
  List,
  Item,
  ListGenres,
  Wrapper,
  Article,
} from "./MoviesDetails.styles";

import Error from "../../Components/ErrorMessage/ErrorMessage";
import Spinner from "../../Components/Spinner/Spinner";
import routers from "../../utils/routers";

const Cast = lazy(() => import("../../Components/Cast/Cast"));
const Reviews = lazy(() => import("../../Components/Reviews/Reviews"));

const MoviesDetails = () => {
  const [moviesDetail, setMoviesDetail] = useState({});
  const [error, setError] = useState("");

  const movieId = useParams().movieId;
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const path = useRouteMatch().path;

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push("/");
  };

  useEffect(() => {
    getDetails(movieId)
      .then((response) => setMoviesDetail({ ...response.data }))
      .catch((error) => setError(error.response.data.status_message));
  }, [movieId]);

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = moviesDetail;

  const year = String(release_date).slice(0, -6);

  const { MOVIE_CAST, MOVIE_REVIEWS } = routers;

  return (
    <Wrapper>
      {error && <Error error={error} />}
      {!error && !!Object.keys(moviesDetail).length && (
        <>
          <Button onClick={goBack}>go back</Button>

          <Container>
            <Poster
              src={!poster_path ? imageNotFound : `${poster}${poster_path}`}
              alt={original_title}
              width={400}
              height={600}
            />

            <Section>
              <Title>{`${original_title} (${year})`}</Title>
              <Text>User Score: {vote_average * 10}%</Text>
              <Subtitle>Overview</Subtitle>
              <Text>{overview}</Text>
              <Subtitle>Genres</Subtitle>
              <ListGenres>
                {genres.map((el) => (
                  <Item key={el.id}>{el.name}</Item>
                ))}
              </ListGenres>
            </Section>
          </Container>

          <Container>
            <Article>
              <Subtitle>Additional information</Subtitle>
              <List>
                <Item>
                  <NavLink
                    to={{
                      pathname: `${url}${MOVIE_CAST}`,
                      state: {
                        from: location.state.from,
                      },
                    }}
                  >
                    Cast
                  </NavLink>
                </Item>

                <Item>
                  <NavLink
                    to={{
                      pathname: `${url}${MOVIE_REVIEWS}`,
                      state: {
                        from: location.state.from,
                      },
                    }}
                  >
                    Reviews
                  </NavLink>
                </Item>
              </List>
            </Article>
          </Container>
        </>
      )}
      <Suspense fallback={<Spinner />}>
        <Route path={`${path}${MOVIE_CAST}`} component={Cast} />
        <Route path={`${path}${MOVIE_REVIEWS}`} component={Reviews} />
      </Suspense>
    </Wrapper>
  );
};

export default MoviesDetails;
