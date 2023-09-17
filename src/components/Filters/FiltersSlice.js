const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };   
    
      case "filters/prioritiesFilterChange":
        return {
          ...state,
          priorities: action.payload,
        }; 
  
    // mặc định chưa lọt vào trường hợp nào nên trả về state
    // state đó chính là initState
    default:
      return state;
  }
};

export default filtersReducer;
