import React, { useState } from "react";
import Button from "./button";
import "./listElement.css";
import DeleteModal from "./deleteModal";
import { Link } from "react-router-dom";

const ListElement = (props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const apiURL = "https://67283275270bd0b97554a345.mockapi.io/friends";

  async function deleteData() {
    try {
      const response = await fetch(`${apiURL}/${props.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        props.refreshData();
      } else {
        console.log("Failed to delete the data.")
      }
    } catch(e) {  
      console.error("Error deleting user:", e);
    }
  }

  return(
    <li className="list-element" data-id={props.id}>
      <div className="row-item"><Link to="/detail" state={{data: props.data}}>{props.name}</Link></div>
      <div className="row-item">{props.phonenumber}</div>
      <div className="row-item">{props.birthday}</div>
      <div className="row-item">{props.relation}</div>
      <div className="row-item">{props.nationality}</div>
      <div className="row-item">{props.city}</div>
      <div className="row-item">
        <Link to="/update" state={{data: props.data}}><Button btn="edit" content="Edit"/></Link>
        <Button btn="delete" content="Delete" function={() => setDeleteModalOpen(true)}/>
      </div>
      {deleteModalOpen ? <DeleteModal onDelete={deleteData} onClose={() => setDeleteModalOpen(false)}/> : <></>}
    </li>
  );
}

export default ListElement;