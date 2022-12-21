import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(); // useCounter returns LOGIC from the function, which returns the counter state

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
