import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.search.value.trim();

    onSubmit(inputValue);
    form.reset();
  };
  return (
    <>
      <form className={style.form} onSubmit={onHandleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  );
};

export default Form;
