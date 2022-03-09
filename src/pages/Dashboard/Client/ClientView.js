import { useState, useEffect } from "react";

const ClientList = (props) => {
  <div className="card">
    <div>{props.client.name}</div>
    <div>{props.client.phone}</div>
    <div>{props.client.registeredDate}</div>
  </div>;
};

const ClientView = () => {
  const [clientList, setClientList] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    const getClientList = async () => {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const clientList = await response.json();
      setClientList(clientList);
    };

    return;
  }, [clientList.length]);

  // This method will map out the records on the table
  function clientMap() {
    return clientList.map((client) => {
      return <ClientList client={client} />;
    });
  }

  return <div className="card">{clientMap()}</div>;
};

export default ClientView;
