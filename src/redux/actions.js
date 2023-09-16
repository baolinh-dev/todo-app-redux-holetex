export const addTodo = (data) => {
    return { 
        type: "todoList/addTodo", 
        payload: data
    }
} 

export const searchFilterChange = (text) => {
    return { 
        type: "filters/searchFilterChange", 
        payload: text
    }
} 

// action creators ==> function ==> dùng để tạo các obj action ==> tránh boilerplate code
