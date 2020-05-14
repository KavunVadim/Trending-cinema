import React, { useEffect, useState } from "react";
import { List, Item, Photo, Text, Name } from "./Cast.styles";
import { useParams } from "react-router-dom";
import { getCast } from "../../helpers/api";
import { castImg } from "../../utils/ImgApi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import imgNotFound from "../../helpers/ImgNotFound/default-profile.gif.png";
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState("");

  const movieId = useParams().movieId;

  useEffect(() => {
    getCast(movieId)
      .then((response) => setCast([...response.data.cast]))
      .catch((error) => setError(error.response.data.status_message));
  }, [movieId]);

  return (
    <List>
      {error && <ErrorMessage />}
      {!error &&
        cast.map((el) => (
          <Item key={el.id}>
            <Photo
              src={
                el.profile_path ? `${castImg}${el.profile_path}` : imgNotFound
              }
              alt={el.name}
            />
            <Name>{el.name}</Name>
            <Text>Character:{el.character}</Text>
          </Item>
        ))}
    </List>
  );
};

export default Cast;
