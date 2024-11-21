import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/button";
import styles from "./update.module.css";

const Update = () => {
  const location = useLocation();
  const data = location.state.data;
  const apiURL = "https://67283275270bd0b97554a345.mockapi.io/friends";

  const nameRef = useRef(data.name);
  const phonenumberRef = useRef(data.phonenumber);
  const birthdayRef = useRef(data.birthday);
  const relationRef = useRef(data.relation);
  const nationalityRef = useRef(data.nationality);
  const cityRef = useRef(data.city);

  const [update, setUpdate] = useState(0);
  const [name, setName] = useState(data.name);
  const [phonenumber, setPhonenumber] = useState(data.phonenumber);
  const [birthday, setBirthday] = useState(data.birthday);
  const [relation, setRelation] = useState(data.relation);
  const [nationality, setNationality] = useState(data.nationality);
  const [city, setCity] = useState(data.city);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhonenumber, setIsValidPhonenumber] = useState(true);
  const [isValidBirthday, setIsValidBirthday] = useState(true);
  const [isValidRelation, setIsValidRelation] = useState(true);
  const [isValidNationality, setIsValidNationality] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);

  const modifyUser = async () => {
    let modifiedData = { 
      id: data.id,
      name: nameRef.current.value, 
      phonenumber: phonenumberRef.current.value, 
      birthday: birthdayRef.current.value, 
      relation: relationRef.current.value, 
      nationality: nationalityRef.current.value, 
      city: cityRef.current.value
    };

    try {
      const response = await fetch(`${apiURL}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifiedData),
      });

      if (!response.ok) console.error("Failed to modify user.");
    } catch (e) {
      console.error("Error modifying user:", e);
    }
  }

  const onChangeName = () => {
    const currentName = nameRef.current.value;
    setName(currentName);
    
    if (currentName.trim().length <= 0 || currentName.trim().length > 30) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const onChangePhone = () => {
    const phone = /^\d{3}-\d{4}-\d{4}$/;
    const currentPN = phonenumberRef.current.value;
    setPhonenumber(currentPN);
    
    if (!phone.test(currentPN)) {
      setIsValidPhonenumber(false);
    } else {
      setIsValidPhonenumber(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const onChangeBirth = () => {
    const date = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
    const currentBirth = birthdayRef.current.value;
    setBirthday(currentBirth);
    
    if (!date.test(currentBirth)) {
      setIsValidBirthday(false);
    } else {
      setIsValidBirthday(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const onChangeRelation = () => {
    const currentRelation = relationRef.current.value;
    setRelation(currentRelation);
    
    if (currentRelation.trim().length <= 0 || currentRelation.trim().length > 100) {
      setIsValidRelation(false);
    } else {
      setIsValidRelation(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const onChangeNationality = () => {
    const currentNationality = nationalityRef.current.value;
    setNationality(currentNationality);
    
    if (currentNationality.trim().length <= 0 || currentNationality.trim().length > 100) {
      setIsValidNationality(false);
    } else {
      setIsValidNationality(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const onChangeCity = () => {
    const currentCity = cityRef.current.value;
    setCity(currentCity);
    
    if (currentCity.trim().length <= 0 || currentCity.trim().length > 100) {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
      setUpdate(update + 1);
      modifyUser();
    }
  };

  const formIsValid = isValidName && isValidPhonenumber && isValidBirthday && isValidRelation && isValidNationality && isValidCity;

  return(
    <form>
      <h3 className={styles.title}>Edit Friend</h3>

      <h4>You have updated the data {update} times!</h4>

      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input className={styles.input} type="text" id="name" placeholder="HongGildong" defaultValue={name} ref={nameRef} onChange={onChangeName}/>
        {!isValidName ? <p className={styles.warning} id="warning-name">The name's length must be between 1 ~ 30.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="phonenumber">Phone Number</label>
        <input className={styles.input} type="text" id="phonenumber" placeholder="xxx-xxxx-xxxx" defaultValue={phonenumber} ref={phonenumberRef} onChange={onChangePhone}/>
        {!isValidPhonenumber ? <p className={styles.warning} id="warning-phonenumber">Invalid form of Phone Number.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="birthday">Birthday</label>
        <input className={styles.input} type="text" id="birthday" placeholder="00/00" defaultValue={birthday} ref={birthdayRef} onChange={onChangeBirth}/>
        {!isValidBirthday ? <p className={styles.warning} id="warning-birthday">Invalid form of birthday.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="relation">Relation</label>
        <input className={styles.input} type="text" id="relation" placeholder="coworker" defaultValue={relation} ref={relationRef} onChange={onChangeRelation}/>
        {!isValidRelation ? <p className={styles.warning} id="warning-relation">Relation input cannot be the blank.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="nationality">Nationality</label>
        <input className={styles.input} type="text" id="nationality" placeholder="Korea" defaultValue={nationality} ref={nationalityRef} onChange={onChangeNationality}/>
        {!isValidNationality ? <p className={styles.warning} id="warning-nationality">Nationality input cannot be the blank.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="city">City</label>
        <input className={styles.input} type="text" id="city" placeholder="Seoul" defaultValue={city} ref={cityRef} onChange={onChangeCity}/>
        {!isValidCity ? <p className={styles.warning} id="warning-city">City input cannot be the blank.</p> : <p/>}
      </div>
      <div className={styles.btn_block}>
        <Link to="/list"><Button btn="cancel" content="Go back to list Page" disabled={!formIsValid}/></Link>
      </div>
    </form>
  );
}

export default Update;