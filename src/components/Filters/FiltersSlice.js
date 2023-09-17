// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };   
    
//       case "filters/prioritiesFilterChange":
//         return {
//           ...state,
//           priorities: action.payload,
//         }; 
  
//     // mặc định chưa lọt vào trường hợp nào nên trả về state
//     // state đó chính là initState
//     default:
//       return state;
//   }
// };

// export default filtersReducer; 

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange, prioritiesFilterChange } =
  filtersSlice.actions;
export default filtersSlice.reducer;
