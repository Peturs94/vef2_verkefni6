import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;
/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */

export async function deleteTodo(id) {
  /* todo */
}

export async function addTodo(title, due) {
  const options = {
    body: JSON.stringify({
      title,
      due,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  const url = new URL('/', apiUrl);
  const response = await fetch(url.href, options);

}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
}

export async function getTodos(hideCompleted = undefined) {

  const completed = hideCompleted ? false : true;

  const url = new URL('/?completed=${completed}', apiUrl);
  const response = await fetch(url.href);
  const result = await response.json();

  return {
    success: response.ok,
    result
  }
}

export async function getTodo(id) {
  const toDo = await getTodos();
  const foundTodo = toDo.result.find(i => i.id === Number(id));

  return foundTodo;
}