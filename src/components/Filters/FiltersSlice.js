const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    // mặc định chưa lọt vào trường hợp nào nên trả về state
    // state đó chính là initState
    default:
      return state;
  }
};

export default filtersReducer;