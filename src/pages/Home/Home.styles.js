import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 1rem;
`;
export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 5px;
  max-width: 1440px;
  min-width: 258px;
  list-style: none;
  margin-top:10px;
`;
export const Item = styled.li`
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: black;
    :hover {
      color: #ff8c00;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
