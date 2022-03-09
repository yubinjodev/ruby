import React from "react";

const ClientView = () => {
  const clients = [
    {
      name: "Jane Doe",
      phone: "010-1234-1234",
      registeredDate: "Febuary 07, 2022",
    },
    {
      name: "John Smith",
      phone: "010-1234-1234",
      registeredDate: "March 25, 2022",
    },
    {
      name: "Alessandra Morley",
      phone: "010-1234-1234",
      registeredDate: "October 30, 2022",
    },
    {
      name: "Lily-Ann Sweeney",
      phone: "010-1234-1234",
      registeredDate: "October 30, 2022",
    },
    {
      name: "Jane Doe",
      phone: "010-1234-1234",
      registeredDate: "Febuary 07, 2022",
    },
    {
      name: "John Smith",
      phone: "010-1234-1234",
      registeredDate: "March 25, 2022",
    },
    {
      name: "Alessandra Morley",
      phone: "010-1234-1234",
      registeredDate: "October 30, 2022",
    },
    {
      name: "Lily-Ann Sweeney",
      phone: "010-1234-1234",
      registeredDate: "October 30, 2022",
    },
  ];

  return (
    <>
      {clients.map((client, index) => {
        return (
          <div key={index} className="card">
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
