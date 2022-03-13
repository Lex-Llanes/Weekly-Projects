import React, { createElement } from "react"
import ReactDOM from "react-dom";
import Question from "./../question"
import { render } from "@testing-library/react"
import { create } from "react-test-renderer"
import { isTSAnyKeyword } from "@babel/types"



describe("Question renders properly as specified", () => {
    it("Matches the snapshot", () => {
        //This will simulate calling the Question cxomponent (mounting it to the parent)
        const question = create(<Question />);
        //This is expectin git to match the component
        expect(question.toJSON()).toMatchSnapshot();
    })
})