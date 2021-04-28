import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center; 
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  
  padding: 10px;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;
export const Text = styled.p`
  margin: 10px 0 0;
`;
export const Name = styled.p`
  margin: 10px 0 0;
  font-weight: 700;
`;
