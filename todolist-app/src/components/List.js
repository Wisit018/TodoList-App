import { FcEditImage,FcFullTrash  } from "react-icons/fc";


const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="button-container">
        {/* <button className="edit-btn" onClick={() => editItem(id)}>Edit</button> */}
        <FcEditImage className="btn" onClick={() => editItem(id)}/>
        <FcFullTrash className="btn" onClick={() => removeItem(id)} />

        {/* <button className="remove-btn" onClick={() => removeItem(id)}>Remove</button> */}
      </div>
    </div>
  );
};
export default List;
