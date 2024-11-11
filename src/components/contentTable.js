import React from "react";
import "./contentTable.css";
import ListElement from "./listElement";

const ContentTable = (props) => {
  const data = props.data;

  return(
    <div className="content-box">
      <div className="list-header">
        <div className="row-item">Name</div>
        <div className="row-item">PhoneNumber</div>
        <div className="row-item">Birthday</div>
        <div className="row-item">Relation</div>
        <div className="row-item">Nationality</div>
        <div className="row-item">City</div>
        <div className="row-item">Menu</div>
      </div>
      <ol className="element-container">
        {data.map((e) => (
          <ListElement
            refreshData={props.refreshData}
            key={e.id}
            id={e.id}
            name={e.name}
            phonenumber={e.phonenumber}
            birthday={e.birthday}
            relation={e.relation}
            nationality={e.nationality}
            city={e.city}
          />
        ))}
      </ol>
    </div>
  );
}

export default ContentTable;