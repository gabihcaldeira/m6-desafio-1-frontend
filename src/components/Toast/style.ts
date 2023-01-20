import styled from "styled-components";
import "animate.css";

export const ToastContainer = styled.div`
  width: 250px;
  height: 70px;
  padding: 25px 15px;

  border: 2px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background-3);

  position: absolute;
  top: 15px;
  right: 50%;

  animation: fadeIn;
  animation-duration: 1s;

  > .messageContainer {
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 15px;

    > .message_icon {
      font-size: 20px;
    }

    > .message_text {
      font-size: 16px;
      font-weight: 600;
      font-style: italic;

      color: var(--color-text-input);
    }

    > .--timeout {
      color: var(--color-timeout-icon);
    }

    > .--error {
      color: var(--color-error-icon);
    }

    > .--delay {
      color: var(--color-blue-text);
    }
  }
`;
