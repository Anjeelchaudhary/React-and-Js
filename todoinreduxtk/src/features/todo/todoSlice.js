import { createSlice, nanoid } from "@reduxjs/toolkit";


//yaha object lehatu tabe {} aisin sign lenu yeadi 
//array letu to [] e ola sign letu
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: 1, text: "Hello world" }
        }
    },
    removeTodo: () => { },
}
)