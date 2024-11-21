import React, { useState, useEffect } from "react";
import Button from "../components/button";
import ContentTable from "../components/contentTable";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://67283275270bd0b97554a345.mockapi.io/friends");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = async () => {
    await fetchData();
  };

  return(
    <div>
      <h3>Friend CRUD Management with React</h3>
      <Link to="/create"><Button btn="add" content="Add"/></Link>
      <ContentTable data={data} refreshData={refreshData}/>
    </div>
  );
}

export default ShowList;