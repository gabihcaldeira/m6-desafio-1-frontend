import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 200px;
  height: 223px;

  > .titleContainer {
    width: 161px;
    padding-bottom: 4px;
    margin-bottom: 13px;

    border-bottom: 1px solid var(--color-blue-text-2);

    > .titleContainer_title {
      font-style: italic;
      font-weight: 700;
      font-size: 16px;
      line-height: 20.11px;
      text-transform: uppercase;

      color: var(--color-blue-text);
    }
  }

  > .listContainer {
    > .listContainer_item {
      font-size: 16px;
      line-height: 46px;
      font-style: italic;
      font-weight: 400;

      color: var(--color-blue-text-2);

      > .item_span {
        font-weight: 700;

        color: var(--color-blue-text-2);
      }
    }
  }
`;
