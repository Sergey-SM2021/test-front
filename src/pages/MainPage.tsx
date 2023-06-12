import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const nav = useNavigate()

  const handlerStart = () => {
    nav('/step/1')
  }
  
  return (
    <div>
      <button onClick={handlerStart}>Начать</button>
    </div>
  );
};
