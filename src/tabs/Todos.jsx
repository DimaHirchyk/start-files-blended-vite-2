import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const LS = localStorage.getItem('todo');
    if (LS !== null) {
      return JSON.parse(LS);
    }
    return [
      { id: '1', text: 'Practice more' },
      { id: '2', text: 'Get all tasks done on time' },
    ];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  console.log(currentTodo);

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newtodo = { id: nanoid(), text: inputValue };
    setTodos(prev => [...prev, newtodo]);
  };
  const deleteTodo = id =>
    setTodos(prev => prev.filter(todo => todo.id !== id));

  const handleEditTodo = id => {
    const currTodo = todos.find(todo => todo.id === id);

    setCurrentTodo(currTodo);
    setIsEditing(prev => !prev);
  };

  const cancelUpdate = () => {
    setIsEditing(prev => !prev);
    setCurrentTodo({});
  };

  const updateTodo = changeTodo => {
    setTodos(prev =>
      prev.map(todo => (todo.id === changeTodo.id ? changeTodo : todo))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      {todos.length === 0 ? (
        <Text textAlign="center">There are no any todos ...</Text>
      ) : (
        <TodoList array={todos} onDelete={deleteTodo} edit={handleEditTodo} />
      )}
    </>
  );
};

export default Todos;
