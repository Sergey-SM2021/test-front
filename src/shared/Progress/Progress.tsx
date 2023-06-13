import { StepIcon, StepItem, StepWrapper } from "./Progress.style";
import Icon from "./assets/Vector.svg";

interface IStep {
  steps: number;
  stepActive: number;
}

export const Step = (props: IStep) => {
  const { steps = 3, stepActive } = props;
  return (
    <StepWrapper>
      {new Array(steps).fill("").map((el, i) => (
        <StepItem isActive={i <= stepActive}>
          <StepIcon isActive={i <= stepActive}>
            {i <= stepActive ? <Icon /> : null}
          </StepIcon>
          {i}
        </StepItem>
      ))}
    </StepWrapper>
  );
};
