import React, { useState } from "react";
import Button from "./button";
import "./listElement.css";
import Modal from "./modal";
import DeleteModal from "./deleteModal";

const ListElement = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const apiURL = "https://67283275270bd0b97554a345.mockapi.io/friends";

  async function deleteData() {
    try {
      const response = await fetch(`${apiURL}/${props.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        props.refreshData();
        alert("Successfully deleted the data.");
      } else {
        console.log("Failed to delete the data.")
      }
    } catch(e) {  
      console.error("Error deleting user:", e);
    }
  }

  return(
    <li className="list-element" data-id={props.id}>
      <div className="row-item">{props.name}</div>
      <div className="row-item">{props.phonenumber}</div>
      <div className="row-item">{props.birthday}</div>
      <div className="row-item">{props.relation}</div>
      <div className="row-item">{props.nationality}</div>
      <div className="row-item">{props.city}</div>
      <div className="row-item">
        <Button btn="edit" content="Edit"  function={() => setModalOpen(true)}/>
        <Button btn="delete" content="Delete" function={() => setDeleteModalOpen(true)}/>
      </div>
      {modalOpen ? <Modal 
        refreshData={props.refreshData}
        onClose={() => setModalOpen(false)} 
        openMod="Edit"
        id={props.id}
        name={props.name}
        phonenumber={props.phonenumber}
        birthday={props.birthday}
        relation={props.relation}
        nationality={props.nationality}
        city={props.city}
        /> : <></>
      }
      {deleteModalOpen ? <DeleteModal onDelete={deleteData} onClose={() => setDeleteModalOpen(false)}/> : <></>}
    </li>
  );
}

export default ListElement;