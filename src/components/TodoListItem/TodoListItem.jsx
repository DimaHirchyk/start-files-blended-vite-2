import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';

const TodoListItem = ({ item, onDelete, index, edit }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{item.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => onDelete(item.id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button className={style.editButton} type="button" onClick={edit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
