const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
