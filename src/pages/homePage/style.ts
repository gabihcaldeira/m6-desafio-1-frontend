import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  max-width: 700px;
  height: fit-content;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid var(--color-border);

  @media (min-width: 768px) {
    height: 390px;
    margin: 100px auto;

    flex-direction: row;
  }

  > .--form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--color-background-3);

    @media (min-width: 768px) {
      padding: 0px 70px;
    }
  }

  > .--results {
    width: 100%;
    padding: 30px;

    background-color: var(--color-background-2);

    @media (min-width: 768px) {
      width: 270px;
      padding: 83.5px 35px;
    }
  }
`;
