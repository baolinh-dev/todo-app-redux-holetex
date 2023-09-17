import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action), 
    todoList: todoListReducer(state.todoList, action),
  }
};

export default rootReducer;
