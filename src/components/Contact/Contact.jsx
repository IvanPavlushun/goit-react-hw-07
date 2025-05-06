
import s from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";


export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div className={s.box}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <FaUser /> {name}
        </li>
        <li className={s.listItem}>
          <FaPhoneAlt /> {number}
        </li>
      </ul>
      <button
        className={s.button}
        onClick={handleDelete} 
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;