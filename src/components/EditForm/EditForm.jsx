import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ cancel, edit, defaultValue }) => {
  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newText = form.text.value.trim();

    if (newText) {
      edit(newText);
    }
  };
  return (
    <form className={style.form} onClick={cancel} onSubmit={onHandleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
