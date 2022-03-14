import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import React from "react";

const ClientView = () => {
  const navigate = useNavigate();
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
          <div
            onClick={() => navigate(`client/${client._id}`)}
            className="card"
            key={client._id}
          >
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
