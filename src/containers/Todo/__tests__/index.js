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

  it("Check Todo Form component", () => {
    const { wrapper } = setup();
    const todoForm = wrapper.find(TodoForm);
    todoForm.props().onChange({ target: { name: "todo", value: "Get Milk" } });
    expect(wrapper.state("todo")).toEqual("Get Milk");
    expect(wrapper.state("error")).toEqual("");
    todoForm.props().addTodo({ preventDefault: jest.fn() });
    expect(wrapper.state("todos").length).toBe(1);
    expect(wrapper.state("todo")).toEqual("");
    todoForm.props().onChange({ target: { name: "todo", value: "Get Food" } });
    todoForm.props().addTodo({ preventDefault: jest.fn() });
    expect(wrapper.state("todos").length).toBe(2);
    expect(wrapper.state("todo")).toEqual("");
    todoForm.props().addTodo({ preventDefault: jest.fn() });
    expect(wrapper.state("error")).toEqual("Required");
  });

  it("Check TodoList component", () => {
    const { wrapper } = setup();
    const todoList = wrapper.find(TodoList);
    const id = new Date().valueOf();
    wrapper.setState({
      todos: [{ id: id, todo: "Get Milk", isDone: false }]
    });
    todoList.props().completeTask(id);
    expect(wrapper.state("todos")).toEqual([
      { id: id, todo: "Get Milk", isDone: true }
    ]);
    todoList.props().completeTask(id);
    expect(wrapper.state("todos")).toEqual([
      { id: id, todo: "Get Milk", isDone: false }
    ]);
    todoList.props().deleteTask(id);
    expect(wrapper.state("todos").length).toBe(0);
  });

  it("Check FilterTodo component", () => {
    const { wrapper } = setup();
    const filterTodos1 = wrapper.find(FilterTodos);
    expect(filterTodos1.exists()).toBe(false);
    const id = new Date().valueOf();
    wrapper.setState({
      todos: [{ id: id, todo: "Get Milk", isDone: false }]
    });
    const filterTodos2 = wrapper.find(FilterTodos);
    expect(filterTodos2.exists()).toBe(true);
    filterTodos2.props().filterTodo("pending");
    expect(wrapper.state("status")).toEqual("pending");
  });
  //   test("should ", () => {
  //     expect(sum(1, 2)).toBe(4);
  //   });
});
