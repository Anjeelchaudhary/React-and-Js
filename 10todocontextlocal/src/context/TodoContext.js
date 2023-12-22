import { useContext, createContext } from "react";

export const Todocontext = createContext({
    todo: [
        {
            id: 1,
            todo: "todoTitle",
            completed: false,
        },
    ],
    addTodo: (todo) => { }
})

export const useTodo = () => {
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider
