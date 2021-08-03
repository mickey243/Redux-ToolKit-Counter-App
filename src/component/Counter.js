import React from "react";
import { Button, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionReducer } from "../Redux-ToolKit/Index";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showHandler);

  const incrementHandler = () => {
    dispatch(actionReducer.increment());
  };
  const decrementHandler = () => {
    dispatch(actionReducer.decrement());
  };
  const increseHandler = () => {
    dispatch(actionReducer.increse(5));
  };
  const toggleHandler = () => {
    dispatch(actionReducer.toggle());
  };

  return (
    <div className="mt-10">
      <h1>Welcome to Redux Toolkit</h1>
      {show && <h1>{counter}</h1>}
      <Container className="mt-5">
        <Button color="danger" className="me-5" onClick={decrementHandler}>
          Decrement
        </Button>
        <Button color="success" className="me-5" onClick={incrementHandler}>
          Increment
        </Button>
        <Button color="warning" onClick={increseHandler}>
          Increment By 5
        </Button>
        <br />
        <Button
          color="secondary"
          onClick={toggleHandler}
          className="mt-5"
          size="lg"
        >
          Toggle
        </Button>
      </Container>
    </div>
  );
}

export default Counter;
