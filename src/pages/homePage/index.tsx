import Form from "../../components/Form";
import ResultsDiv from "../../components/ResultsDiv";
import { StyledTitle } from "../../components/Title/style";
import { Container } from "./style";

const HomePage = () => {
  return (
    <Container>
      <section className="container_section --form">
        <StyledTitle>Simule sua Antecipação</StyledTitle>
        <Form />
      </section>

      <section className="container_section --results">
        <ResultsDiv />
      </section>
    </Container>
  );
};

export default HomePage;
