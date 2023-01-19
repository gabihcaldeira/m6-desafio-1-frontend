import { useContext } from "react";
import { Context } from "../../context/context";
import { ResultContainer } from "./style";

const ResultsDiv = () => {
  const { apiResponse } = useContext(Context);

  return (
    <ResultContainer>
      <div className="titleContainer">
        <h2 className="titleContainer_title">Você Receberá:</h2>
      </div>

      <ul className="listContainer">
        <li className="listContainer_item">
          Amanhã:
          <span className="item_span"> R$ 0,00</span>
        </li>

        <li className="listContainer_item">
          Em 15 dias:
          <span className="item_span"> R$ 0,00</span>
        </li>

        <li className="listContainer_item">
          Em 30 dias:
          <span className="item_span"> R$ 0,00</span>
        </li>

        <li className="listContainer_item">
          Em 90 dias:
          <span className="item_span"> R$ 0,00</span>
        </li>
      </ul>
    </ResultContainer>
  );
};

export default ResultsDiv;
