import React, { createElement } from "react"
import ReactDOM from "react-dom";
import Button from "./../buttons"
import App from "./../../../App"
import { render } from "@testing-library/react"
import { create } from "react-test-renderer"
import { isTSAnyKeyword } from "@babel/types"



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<button></button>, div)
})

it("renders the button with props correctly", () => {
    const {getByTestId} = render(<button data-testid="buttonId">props="testing props"</button>)
    expect(getByTestId("buttonId")).toHaveTextContent("testing props")
})

