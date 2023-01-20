import styled from "styled-components";

export const FormContainer = styled.div`
  width: 251px;
  height: 300px;

  background-color: var(--color-background-3);
  color: var(--color-text);

  > .form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .form_item > .inputContainer {
      width: 251px;
      height: 37px;
      padding-left: 14px;

      position: relative;

      border-radius: 4px;
      border: 1px solid var(--color-border-input);

      display: flex;
      align-items: center;

      :focus-within {
        border: 1px solid var(--color-border-input-focus);
      }

      > .input_prefix {
        color: var(--color-text-input);
        font-size: 14px;
        margin-right: 2px;
      }
    }

    > .form_button {
      width: fit-content;
      padding: 10px 40px;
      margin: 0px auto;

      background-color: transparent;

      border-radius: 4px;
      border: 1px solid var(--color-border-input);

      font-size: 14px;
      font-weight: 600;

      transition: border-color 0.5s ease-in-out;

      :hover {
        border: 1px solid var(--color-border-input-focus);
      }
    }
  }
`;
