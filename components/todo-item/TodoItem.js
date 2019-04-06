import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import css from './TodoItem.css';

export default function todoItem(props) {
  const { loading, updatedId, todo, changeTodoStatus, id } = props;
  const linkAs = `/todo/${id}`;
  const linkHref = `todo?id=${id}`;

  function handleInputChange() {
    changeTodoStatus(todo.id, todo.completed);
  }

  return (
    <React.Fragment>
        <div className={css.item}>
      <input
        type="checkbox"
        className={css.item__input}
        checked={todo.completed}
        onChange={handleInputChange} 
        disabled={loading}
      />
      <Link as= {linkAs} href={linkHref}>
        <a className = {css.item__link}>{todo.title}</a>
      </Link>
      {(todo.due) ? (
        <p className = {css.item__due}>
          Klára fyrir: {todo.due}
        </p>
      ) : (null)}
      
      {(todo.id === updatedId) ? (
        <p className= {css.item__due}>
          Verkefnið var uppfært!
        </p>
      ) : (null)}

      </div>
    </React.Fragment>
  );
}

todoItem.propTypes = {
  loading: PropTypes.bool,
  updatedId: PropTypes.number,
  todo: PropTypes.object,
  changeTodoStatus: PropTypes.func,
}
