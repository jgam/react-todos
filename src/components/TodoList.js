import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray;
`;

function TodoList(){
    return (
    <TodoListBlock>
        <TodoItem text="project created" done={true} />
        <TodoItem text="component styling" done={true} />
        <TodoItem text="context creation" done={false} />
        <TodoItem text="function created" done={false} />
    </TodoListBlock>
    )
}

export default TodoList;