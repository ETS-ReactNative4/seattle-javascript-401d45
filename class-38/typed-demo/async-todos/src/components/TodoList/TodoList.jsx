import { getTodos } from '../../store/todos.store.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function TodoList() {

  let dispatch = useDispatch();
  let count = useSelector(state => state.todos.count);
  let results = useSelector(state => state.todos.results);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div id="todo-list">
      <p>{count}</p>
      {results.map(todo => (
        <>
          <p>{todo.text}</p>
          <p>{todo.assignee}</p>
        </>
      ))}
    </div>
  )

}

export default TodoList;
