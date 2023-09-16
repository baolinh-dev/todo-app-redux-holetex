const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: true, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: false, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }; 
    // mặc định chưa lọt vào trường hợp nào nên trả về state 
    // state đó chính là initState
    default:
      return state;
  }
};

export default rootReducer;
