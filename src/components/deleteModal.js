import React from "react";
import Button from "./button";
import "./deleteModal.css";

const DeleteModal = (props) => {
  return(
    <div className="delete_modal_container">
      <div className="delete_modal_content">
        <h2>Delete confirmation</h2>
        <p>Do you want to delete this item?</p>
        <div className="delete_modal_divider"/>
        <div className="btn-block">
          <Button btn="confirm" content="Confirm" function={props.onDelete}/>
          <Button btn="cancel" content="Cancel" function={props.onClose}/>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;