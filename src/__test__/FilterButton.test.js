import React from "react";
import FilterButton from "../components/FilterButton";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("FilterButton", () => {
  it("should render a button with given props", () => {
    const filters = [
      { value: "all", text: "All" },
      { value: "completed", text: "Completed" },
      { value: "incomplete", text: "Incomplete" }
    ];

    const mockOnclick = jest.fn();

    const component = shallow(
      <FilterButton
        text={filters[1].text}
        value={filters[1].value}
        changeSelected={mockOnclick}
        key="completed"
        filter="Completed"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("should trigger the click function", () => {
    const filters = [
      { value: "all", text: "All" },
      { value: "completed", text: "Completed" },
      { value: "incomplete", text: "Incomplete" }
    ];

    const mockOnclick = jest.fn();

    const component = shallow(
      <FilterButton
        text={filters[1].text}
        value={filters[1].value}
        changeSelected={mockOnclick}
        filter="completed"
      />
    );

    component.simulate("click");

    expect(mockOnclick).toHaveBeenCalled();
  });

  it("should have Todo-control__button class", () => {
    const filters = [
      { value: "all", text: "All" },
      { value: "completed", text: "Completed" },
      { value: "incomplete", text: "Incomplete" }
    ];

    let filter = "all";

    const mockOnclick = jest.fn();

    const wrapper = shallow(
      <FilterButton
        text={filters[1].text}
        value={filters[1].value}
        changeSelected={mockOnclick}
        filter={filter}
      />
    );

    expect(wrapper.hasClass("Todo-control__button")).toBe(true);
  });

  it("should have Todo-control__button--selected class upon change of props", () => {
    const filters = [
      { value: "all", text: "All" },
      { value: "completed", text: "Completed" },
      { value: "incomplete", text: "Incomplete" }
    ];

    const mockOnclick = jest.fn(() => {
      wrapper.setProps({ filter: "completed" });
    });

    const wrapper = shallow(
      <FilterButton
        text={filters[1].text}
        value={filters[1].value}
        changeSelected={mockOnclick}
        filter="all"
      />
    );

    expect(wrapper.hasClass("Todo-control__button--selected")).toBe(false);

    wrapper.simulate("click");

    expect(wrapper.hasClass("Todo-control__button--selected")).toBe(true);
  });

  it("should delete one of the items in list upon clickin delete", () => {
    const filters = [
      { value: "all", text: "All" },
      { value: "completed", text: "Completed" },
      { value: "incomplete", text: "Incomplete" }
    ];

    const mockOnclick = jest.fn(() => {
      wrapper.setProps({ filter: "completed" });
    });

    const wrapper = shallow(
      <FilterButton
        text={filters[1].text}
        value={filters[1].value}
        changeSelected={mockOnclick}
        filter="all"
      />
    );

    expect(wrapper.hasClass("Todo-control__button--selected")).toBe(false);

    wrapper.simulate("click");

    expect(wrapper.hasClass("Todo-control__button--selected")).toBe(true);
  });
});
