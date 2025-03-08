import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ array, onDelete, edit }) => {
  return (
    <>
      <Grid>
        {array.map((arr, index) => (
          <GridItem key={arr.id}>
            <TodoListItem
              index={index}
              item={arr}
              onDelete={onDelete}
              edit={edit}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
