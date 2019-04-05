
import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo } from '../api';

function Home(props) {
  const {todo, id} = props;
  return (
    <Layout title = {todo.title}>
      <TodoDetail
      todo = {todo}>
      <h1>Hallo</h1>
      </TodoDetail>
    </Layout>
  );
}

Home.getInitialProps = async({ query }) => {
  const { id } = query;

  const todo = await getTodo(id);
  return { id , todo };
}

export default Home