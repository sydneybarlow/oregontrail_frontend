import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";
import { Button } from "react-bootstrap";
import TestRenderer from "react-test-renderer";

test("Game Start", () => {
  const component = TestRenderer.create(<Button>Get Goin!</Button>);
  let example = component.toJSON();
  expect(example).toMatchSnapshot();
});
