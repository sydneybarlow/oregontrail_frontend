import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage";
import { Button } from "react-bootstrap";
import TestRenderer from "react-test-renderer";

test("Game Start", () => {
  const component = TestRenderer.create(<Button>Get Goin!</Button>);
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
