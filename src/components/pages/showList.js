import React, { useState, useEffect } from "react";
import Button from "../button";
import ContentTable from "../contentTable";
import Modal from "../modal";

const ShowList = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
      <Button btn="add" content="Add" function={() => setModalOpen(true)}/>
      <ContentTable data={data} refreshData={refreshData}/>
      {modalOpen ? <Modal refreshData={refreshData} onSubmit={() => {}} onClose={() => setModalOpen(false)} openMod="Add"/> : <></>}
    </div>
  );
}

export default ShowList;