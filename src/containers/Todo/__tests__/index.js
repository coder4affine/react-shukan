import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todo from "../index";
import TodoForm from "../todoForm";
import TodoList from "../todoList";
import FilterTodos from "../filterTodos";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};

  const wrapper = shallow(<Todo {...props} />);

  return {
    props,
    wrapper
  };
}

// const sum = (a, b) => a + b;

describe("test todo app", () => {
  it("description", () => {
    // expect(sum(1, 2)).toBe(3);

    const { wrapper } = setup();
    expect(wrapper.find("h1").text()).toEqual("My To-Do Application");
    expect(wrapper.find(TodoForm).props()).toEqual({
      addTodo: expect.any(Function),
      onChange: expect.any(Function),
      error: wrapper.state("error")
    });
    expect(wrapper.find(TodoList).props()).toEqual({
      completeTask: expect.any(Function),
      deleteTask: expect.any(Function),
      todos: wrapper.state("todos")
    });

    expect(wrapper.find(FilterTodos).exists()).toBe(false);
  });

  it("description", () => {});

  //   test("should ", () => {
  //     expect(sum(1, 2)).toBe(4);
  //   });
});
