import { Input } from "./Progress.style";

export const Step = () => {
  return <Input type="range" min={1} max={3} step={1} />;
};
