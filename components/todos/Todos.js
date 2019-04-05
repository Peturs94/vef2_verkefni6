import React from 'react';

import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';
import Form from '../form/Form';

import css from './Todos.css';
// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const { initialTodos, id } = props;

  return (
    <React.Fragment>
      <Button children="Fela búið"/>
      <div className="todos">
      {initialTodos.map((item, i) => (
          <TodoItem key={i} todo={item} id={initialTodos[i].id} />
      ))}
      </div>
    </React.Fragment>
  );
}
