import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.profile}>
      <ul>
        <li className={css.info}>
          <FaUser />
          &nbsp;&nbsp;{name}
        </li>
        <li className={css.info}>
          <FaPhone />
          &nbsp;&nbsp;{number}
        </li>
      </ul>
      <button className={css.deleteBtn} type="button" onClick={onClick}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
