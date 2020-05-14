import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../helpers/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { List, Item, Title, Text } from "./Reviews.styles";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const movieId = useParams().movieId;

  useEffect(() => {
    getReviews(movieId)
      .then((response) => setReviews([...response.data.results]))
      .catch((error) => setError(error.response.data.status_message));
  }, [movieId]);

  return (
    <List>
      {error && <ErrorMessage />}
      {!error &&
        !!reviews.length &&
        reviews.map((el) => (
          <Item key={el.id}>
            <Title>Author: {el.author}</Title>
            <Text>{el.content}</Text>
          </Item>
        ))}
      {!error && !!reviews.length < 1 && (
        <Title>We don't have reviews for this movie.</Title>
      )}
    </List>
  );
};

export default Reviews;
