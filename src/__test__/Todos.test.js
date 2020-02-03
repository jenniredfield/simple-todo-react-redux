import React from "react";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todos from "../components/Todos";

Enzyme.configure({ adapter: new Adapter() });

describe("Todos list container", () => {
  const todos = [
    { task: "Dance", done: false },
    { task: "Drink coffee", done: false },
    { task: "Go out", done: false }
  ];

  it("renders a container for Todo", () => {
    const component = shallow(<Todos todos={todos} />);
    expect(component.find(".Todo-list__container")).toBeDefined();
  });

  it("renders a list of todos", () => {
    const component = shallow(<Todos todos={todos} />);

    expect(component.find("Todo")).toBeDefined();
    expect(component.find("Todo")).toHaveLength(3);
  });

  it("contains todos with a class", () => {
    const component = mount(<Todos todos={todos} />);

    // console.log(component.debug());
    // can console log a shallow or mounted component

    expect(component.find(".Todo__container")).toHaveLength(3);
    // unmount so it doesn't interfere with other tests;
    component.unmount();
  });
});
