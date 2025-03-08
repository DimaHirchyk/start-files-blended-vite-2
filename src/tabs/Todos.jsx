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

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newtodo = { id: nanoid(), text: inputValue };
    setTodos(prev => [...prev, newtodo]);
  };
  const deleteTodo = id =>
    setTodos(prev => prev.filter(todo => todo.id !== id));

  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = (id, newText) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };
  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          edit={updateTodo}
          cancel={cancelUpdate}
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
