import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";

const ClientView = () => {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/client/all`).then((res) => {
      const clientList = res.data;
      setClientList(clientList);
    });
  }, [clientList.length]);

  return (
    <>
      {clientList.map((client, index) => {
        return (
          <div className="card" key={client._id}>
            <div>{client.name}</div>
            <div>{client.phone}</div>
            <div>{client.registeredDate}</div>
          </div>
        );
      })}
    </>
  );
};

export default ClientView;
