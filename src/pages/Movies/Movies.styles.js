import styled from "styled-components";

export const Form = styled.form`
  margin: 20px;
  box-shadow: -1px 12px 10px -10px rgba(0, 0, 0, 0.75);
  display: inline-block;
`;

export const Input = styled.input`
  width: 300px;
  border: none;
  border: 1px solid #ff8c00;
  border-right: none;
  outline: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 600;
`;
export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border: 1px solid #ff8c00;
  border-left: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff8c00;
  :hover {
    background-color: black;
    color: #ff8c00;
    border: 1px solid black;
  }
`;
export const List = styled.ul`
  list-style: none;
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
