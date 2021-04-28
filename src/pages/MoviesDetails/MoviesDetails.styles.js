import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(700px,1fr);
  gap: 20px;
`;

export const Wrapper = styled.div`
  padding: 10px;
`;
export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-left: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff8c00;
  margin-bottom: 10px;
  :hover {
    background-color: black;
    color: #ff8c00;
  }
`;
export const Poster = styled.img`
  width: 300px;
  height: auto;
  margin: 0 0 20px;
`;

export const Title = styled.h1`
  margin: 0 0 26px;
  font-weight: 900;
  font-size: 40px;
`;
export const Text = styled.p`
  margin: 0 0 26px;
  font-size: 19px;
  font-weight: 400;
`;
export const Subtitle = styled.h2`
  margin: 0 0 26px;
`;
export const Section = styled.div``;

export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  margin-right: 10px;
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: black;
    :hover {
      color: #ff8c00;
    }
    &.active {
      color: #ff8c00;
    }
  }
`;
export const ListGenres = styled.ul`
  list-style: none;
  display: flex;
  font-size: 20px;
  font-weight: 600;
`;

export const Article = styled.div`
  ::after,
  ::before {
    content: "";
    display: block;
    height: 2px;
    background: linear-gradient(to right, black, transparent);
  }
`;
