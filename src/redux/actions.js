export const addTodo = (data) => {
    return { 
        type: "todoList/addTodo", 
        payload: data
    }
}

// action creators ==> function ==> dùng để tạo các obj action ==> tránh boilerplate code
