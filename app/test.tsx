'use client';

import { useState } from 'react';
import { getTodo } from './actions';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Test = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const handleClick = async () => {
    const data = await getTodo();
    setTodo(data);
  };

  return (
    <div>
      <h1>Fetch Todos</h1>
      <button className='border-2 rounded-md p-2' onClick={handleClick}>
        Fetch
      </button>
      <br />
      {todo && (
        <div>
          <h3>ID: {todo.id}</h3>
          <h3>Title: {todo.title}</h3>
          <h3>Completed: {todo.completed ? 'Yes' : 'No'}</h3>
        </div>
      )}
    </div>
  );
};

export default Test;
