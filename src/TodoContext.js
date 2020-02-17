import React, { useReducer, createContext, useContext } from 'react';

const initialTodos = [
    {
        id: 1,
        text: 'project creation',
        done: true
    },
    {
        id:2,
        text: 'component styling',
        done: true
    },
    {
        id:3,
        text: 'Context creation',
        done: false
    },
    {
        id:4,
        text: 'function creation',
        done: false
    }
];

function todoReducer(state, action){
    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done } : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action type: ${action.type}');
                
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value ={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}