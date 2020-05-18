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
        cast.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            <Photo
              src={profile_path ? `${castImg}${profile_path}` : imgNotFound}
              alt={name}
            />
            <Name>{name}</Name>
            <Text>Character:{character}</Text>
          </Item>
        ))}
    </List>
  );
};

export default Cast;
