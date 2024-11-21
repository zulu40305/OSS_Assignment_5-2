import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import styles from "./create.module.css";

const Create = () => {
  const navigate = useNavigate();
  const apiURL = "https://67283275270bd0b97554a345.mockapi.io/friends";

  const nameRef = useRef('');
  const phonenumberRef = useRef('');
  const birthdayRef = useRef('');
  const relationRef = useRef('');
  const nationalityRef = useRef('');
  const cityRef = useRef('');

  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [relation, setRelation] = useState('');
  const [nationality, setNationality] = useState('');
  const [city, setCity] = useState('');

  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhonenumber, setIsValidPhonenumber] = useState(false);
  const [isValidBirthday, setIsValidBirthday] = useState(false);
  const [isValidRelation, setIsValidRelation] = useState(false);
  const [isValidNationality, setIsValidNationality] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);

  const addUser = async () => {
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
  
        if (response.ok) {
          alert("Successfully added the data.");
          navigate("/list");
        }
      } catch (e) {
        console.error("Failed to add user.");
      }
    }
  }

  const onChangeName = () => {
    const currentName = nameRef.current.value;
    setName(currentName);
    
    if (currentName.trim().length <= 0 || currentName.trim().length > 30) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
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
    }
  };

  const onChangeRelation = () => {
    const currentRelation = relationRef.current.value;
    setRelation(currentRelation);
    
    if (currentRelation.trim().length <= 0 || currentRelation.trim().length > 100) {
      setIsValidRelation(false);
    } else {
      setIsValidRelation(true);
    }
  };

  const onChangeNationality = () => {
    const currentNationality = nationalityRef.current.value;
    setNationality(currentNationality);
    
    if (currentNationality.trim().length <= 0 || currentNationality.trim().length > 100) {
      setIsValidNationality(false);
    } else {
      setIsValidNationality(true);
    }
  };

  const onChangeCity = () => {
    const currentCity = cityRef.current.value;
    setCity(currentCity);
    
    if (currentCity.trim().length <= 0 || currentCity.trim().length > 100) {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }
  };

  const formIsValid = isValidName && isValidPhonenumber && isValidBirthday && isValidRelation && isValidNationality && isValidCity;

  return(
    <form>
      <h3 className={styles.title}>Add Friend</h3>

      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input className={styles.input} type="text" id="name" placeholder="HongGildong" ref={nameRef} onChange={onChangeName}/>
        {!isValidName ? <p className={styles.warning} id="warning-name">The name's length must be between 1 ~ 30.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <labe className={styles.label} htmlFor="phonenumber">Phone Number</labe>
        <input className={styles.input} type="text" id="phonenumber" placeholder="xxx-xxxx-xxxx" ref={phonenumberRef} onChange={onChangePhone}/>
        {!isValidPhonenumber ? <p className={styles.warning} id="warning-phonenumber">Invalid form of Phone Number.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="birthday">Birthday</label>
        <input className={styles.input} type="text" id="birthday" placeholder="00/00" ref={birthdayRef} onChange={onChangeBirth}/>
        {!isValidBirthday ? <p className={styles.warning} id="warning-birthday">Invalid form of birthday.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="relation">Relation</label>
        <input className={styles.input} type="text" id="relation" placeholder="coworker" ref={relationRef} onChange={onChangeRelation}/>
        {!isValidRelation ? <p className={styles.warning} id="warning-relation">Relation input cannot be the blank.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="nationality">Nationality</label>
        <input className={styles.input} type="text" id="nationality" placeholder="Korea" ref={nationalityRef} onChange={onChangeNationality}/>
        {!isValidNationality ? <p className={styles.warning} id="warning-nationality">Nationality input cannot be the blank.</p> : <p/>}
      </div>
  
      <div className={styles.input_element}>
        <label className={styles.label} htmlFor="city">City</label>
        <input className={styles.input} type="text" id="city" placeholder="Seoul" ref={cityRef} onChange={onChangeCity}/>
        {!isValidCity ? <p className={styles.warning} id="warning-city">City input cannot be the blank.</p> : <p/>}
      </div>
      <div className={styles.btn_block}>
        <Button btn="submit" content="Submit" function={() => addUser()} disabled={!formIsValid}/>
        <Link to="/list"><Button btn="cancel" content="Cancel"/></Link>
      </div>
    </form>
  );
}

export default Create;