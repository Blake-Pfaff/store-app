import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .infromation,
  .buttons {
    display: flex;
    justify-content: space-around;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
  .divider {
    width: 100%;
    text-align: center;
  }
`;
