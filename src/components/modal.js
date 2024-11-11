import React, { useState } from "react";
import Button from "./button";
import "./modal.css";

const Modal = (props) => {
  const [name, setName] = useState(props.name ? props.name : '');
  const [phonenumber, setPhonenumber] = useState(props.phonenumber ? props.phonenumber : '');
  const [birthday, setBirthday] = useState(props.birthday ? props.birthday : '');
  const [relation, setRelation] = useState(props.relation ? props.relation : '');
  const [nationality, setNationality] = useState(props.nationality ? props.nationality : '');
  const [city, setCity] = useState(props.city ? props.city : '');

  const [isValidName, setIsValidName] = useState(props.name ? true : false);
  const [isValidPhonenumber, setIsValidPhonenumber] = useState(props.phonenumber ? true : false);
  const [isValidBirthday, setIsValidBirthday] = useState(props.birthday ? true : false);
  const [isValidRelation, setIsValidRelation] = useState(props.relation ? true : false);
  const [isValidNationality, setIsValidNationality] = useState(props.nationality ? true : false);
  const [isValidCity, setIsValidCity] = useState(props.city ? true : false);

  const apiURL = "https://67283275270bd0b97554a345.mockapi.io/friends";

  const adduser = async () => {
    if (formIsValid) {
      let userData = {
        id: Math.random().toString(),
        name: name, 
        phonenumber: phonenumber, 
        birthday: birthday, 
        relation: relation, 
        nationality: nationality, 
        city: city
      }
  
      try {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        props.refreshData();
        props.onClose();
  
        if (response.ok) {
          alert("Successfully added the data.");
        }
      } catch (e) {
        console.error("Failed to add user.");
      }
    }
  }

  const modifyUser = async () => {
    let modifiedData = { 
      id: props.id,
      name: name, 
      phonenumber: phonenumber, 
      birthday: birthday, 
      relation: relation, 
      nationality: nationality, 
      city: city
    };

    try {
      const response = await fetch(`${apiURL}/${props.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifiedData),
      });

      props.refreshData();
      props.onClose();

      if (response.ok) {
        alert("Successfully modified the data.");
      } else {
        console.error("Failed to modify user.");
      }
    } catch (e) {
      console.error("Error modifying user:", e);
    }
  }

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    
    if (currentName.trim().length <= 0 || currentName.trim().length > 30) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const onChangePhone = (e) => {
    const phone = /^\d{3}-\d{4}-\d{4}$/;
    const currentPN = e.target.value;
    setPhonenumber(currentPN);
    
    if (!phone.test(currentPN)) {
      setIsValidPhonenumber(false);
    } else {
      setIsValidPhonenumber(true);
    }
  };

  const onChangeBirth = (e) => {
    const date = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    const currentBirth = e.target.value;
    setBirthday(currentBirth);
    
    if (!date.test(currentBirth)) {
      setIsValidBirthday(false);
    } else {
      setIsValidBirthday(true);
    }
  };

  const onChangeRelation = (e) => {
    const currentRelation = e.target.value;
    setRelation(currentRelation);
    
    if (currentRelation.trim().length <= 0 || currentRelation.trim().length > 100) {
      setIsValidRelation(false);
    } else {
      setIsValidRelation(true);
    }
  };

  const onChangeNationality = (e) => {
    const currentNationality = e.target.value;
    setNationality(currentNationality);
    
    if (currentNationality.trim().length <= 0 || currentNationality.trim().length > 100) {
      setIsValidNationality(false);
    } else {
      setIsValidNationality(true);
    }
  };

  const onChangeCity = (e) => {
    const currentCity = e.target.value;
    setCity(currentCity);
    
    if (currentCity.trim().length <= 0 || currentCity.trim().length > 100) {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }
  };

  const formIsValid = isValidName && isValidPhonenumber && isValidBirthday && isValidRelation && isValidNationality && isValidCity;


  return(
    <div className="modal_container">
      <div className="modal_content">
        <form>
          <h3 className="modal_title">{props.openMod} Friend</h3>
          <div className="input-element">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="HongGildong" value={name} onChange={onChangeName}/>
            {!isValidName ? <p className="warning" id="warning-name">The name's length must be between 1 ~ 30.</p> : <p/>}
          </div>
      
          <div className="input-element">
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="text" id="phonenumber" placeholder="xxx-xxxx-xxxx" value={phonenumber} onChange={onChangePhone}/>
            {!isValidPhonenumber ? <p className="warning" id="warning-phonenumber">Invalid form of Phone Number.</p> : <p/>}
          </div>
      
          <div className="input-element">
            <label htmlFor="birthday">Birthday</label>
            <input type="text" id="birthday" placeholder="00/00" value={birthday} onChange={onChangeBirth}/>
            {!isValidBirthday ? <p className="warning" id="warning-birthday">Invalid form of birthday.</p> : <p/>}
          </div>
      
          <div className="input-element">
            <label htmlFor="relation">Relation</label>
            <input type="text" id="relation" placeholder="coworker" value={relation} onChange={onChangeRelation}/>
            {!isValidRelation ? <p className="warning" id="warning-relation">Relation input cannot be the blank.</p> : <p/>}
          </div>
      
          <div className="input-element">
            <label htmlFor="nationality">Nationality</label>
            <input type="text" id="nationality" placeholder="Korea" value={nationality} onChange={onChangeNationality}/>
            {!isValidNationality ? <p className="warning" id="warning-nationality">Nationality input cannot be the blank.</p> : <p/>}
          </div>
      
          <div className="input-element">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Seoul" value={city} onChange={onChangeCity}/>
            {!isValidCity ? <p className="warning" id="warning-city">City input cannot be the blank.</p> : <p/>}
          </div>
          <div className="btn-block">
            <Button btn="submit" content="Submit" function={() => {props.openMod === "Add" ? adduser() : modifyUser()}} disabled={!formIsValid}/>
            <Button btn="cancel" content="Cancel" function={props.onClose}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;