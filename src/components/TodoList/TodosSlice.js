const initState = [
  { id: 1, name: "Learn Yoga", completed: true, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: false, priority: "High" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    // mặc định chưa lọt vào trường hợp nào nên trả về state
    // state đó chính là initState
    default:
      return state;
  }
};

export default todoListReducer;
