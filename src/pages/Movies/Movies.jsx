/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { getMoviesList } from "../../helpers/api";
import queryString from "query-string";
import routers from "../../utils/routers";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/ErrorMessage/ErrorMessage";
import { Form, Input, Button, List, Item } from "./Movies.styles";

const Movies = () => {
  const [value, setValue] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { MOVIES } = routers;

  const inputChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    history.push({ ...location, search: `?query=${value}` });
    setValue("");
  };

  useEffect(() => {
    setLoader(true);
    if (!location.search) {
      setValue("");
      return;
    }
    const query = queryString.parse(location.search).query;
    getMoviesList(query)
      .then((response) => setSearchMovies([...response.data.results]))
      .catch((error) => setError(error.response.data.status_message));
  }, [location.search]);

  useEffect(() => {
    setLoader(false);
  }, [searchMovies]);

  return (
    <>
      <Form onSubmit={submitForm}>
        <Input
          type="text"
          value={value}
          onChange={inputChange}
          placeholder={"Enter search movie"}
          Focus
        />
        <Button type="submit">Search</Button>
      </Form>

      {error && <Error error={error} />}
      {!error && loader && <Spinner />}
      {!error && !loader && (
        <List>
          {searchMovies.map((el) => (
            <Item key={el.id}>
              <Link
                to={{
                  pathname: `${MOVIES}/${el.id}`,
                  state: { from: location },
                }}
              >
                {el.title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Movies;
