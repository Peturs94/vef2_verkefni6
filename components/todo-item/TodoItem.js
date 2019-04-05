import React, { useState } from 'react';
import Link from 'next/link';
import css from './TodoItem.css';

export default function todoItem(props) {
  const { todo, id } = props;
  const linkAs = `/todo/${id}`;
  const linkHref = `todo?id=${id}`;
  return (
    <React.Fragment>
        <div className={css.item}>
      <input
        type="checkbox"
        className={css.item__input}
      />
      <Link as= {linkAs} href={linkHref}>
        <a className = {css.item__link}>{todo.title}</a>
      </Link>
      {<p className = {css.item__due}>{todo.due}</p>}
      </div>
    </React.Fragment>
  );
}
