import React from "react";
import styles from "./detail.module.css";
import { Link, useLocation } from 'react-router-dom';
import Button from "../components/button";

const Detail = () => {
  const location = useLocation();
  const data = location.state.data;

  return(
    <div>
      <h3>Detail Page</h3>
      <h4>Information about {data.name} below</h4>
      <p className={styles.item_label}>Name: <span className={styles.value}>{data.name}</span></p>
      <p className={styles.item_label}>PhoneNumber: <span className={styles.value}>{data.phonenumber}</span></p>
      <p className={styles.item_label}>Birthday: <span className={styles.value}>{data.birthday}</span></p>
      <p className={styles.item_label}>Relation: <span className={styles.value}>{data.relation}</span></p>
      <p className={styles.item_label}>Nationality: <span className={styles.value}>{data.nationality}</span></p>
      <p className={styles.item_label}>City: <span className={styles.value}>{data.city}</span></p>
      <Link to="/list"><Button btn="cancel" content="Go back to list page"/></Link>
    </div>
  );
}

export default Detail;