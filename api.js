import 'isomorphic-fetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;
/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */

export async function deleteTodo(id) {
  const url = new URL(`/${id}`, apiUrl);
  response = await sendData(url.href, {}, 'DELETE');// eslint-disable-line

  if (!response.ok) return false; // eslint-disable-line
  return true;
}

export async function sendData(url, data, method = 'POST') {
  var response = await fetch(url, { // eslint-disable-line
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
}

/**
 * fjarlægir lykla með tóm gildi úr objecti
 * @param {Object} object 
 */
function filterOutEmptyValues(object) {
  const objectToReturn = object;
  Object.keys(objectToReturn).forEach((key) => {
    if (objectToReturn[key] === null || objectToReturn[key] === undefined || objectToReturn[key] === '') {
      delete objectToReturn[key];
    }
  });
  
  return objectToReturn;
}

export async function addTodo(title, due = null) {
  const obj = { title, due };
  const filteredObj = filterOutEmptyValues(obj);

  const url = new URL('/', apiUrl);
  const response = await sendData(url.href, filteredObj);

  const json = await response.json();
  const errors = 'field' in json || 'field' in json[0];

  return { json, errors };
}

export async function updateTodo(id, { title, completed, due } = {}) {
  const obj = { title, completed, due };
  const filteredObj = filterOutEmptyValues(obj);

  console.info(filteredObj);

  const url = new URL(`/${id}`, apiUrl);
  const response = await sendData(url.href, filteredObj, 'PATCH');

  const json = await response.json();
  const errors = 'field' in json || 'field' in json[0];
  return { json, errors };
}

export async function getTodos(hideCompleted = undefined) {
  let path = '/';
  if (hideCompleted) path += '?completed=false';
  const url = new URL(path, apiUrl);
  const response = await fetch(url.href); // eslint-disable-line

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getTodo(id) {
  const url = new URL(`${id}`, apiUrl);
  const response = await fetch(url.href); // eslint-disable-line

  if (response.ok) {
    return null;
  }
  return response.json();
}