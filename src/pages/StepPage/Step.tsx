import { Container } from "../../shared/Container/Container.style";
import { Step } from "../../shared/Progress/Progress";
import { StepPageWrapper } from "./Step.style";

export const StepPage = () => {
  return (
    <StepPageWrapper>
      <Container>
        <Step steps={3} stepActive={1} />
      </Container>
    </StepPageWrapper>
  );
};
