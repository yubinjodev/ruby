import React from "react";

const ProcedureView = () => {
  const procedures = [
    {
      date: "March 09, 2022",
      client: "Jess Hogan",
    },
    {
      date: "March 10, 2022",
      client: "Nola Bob",
    },
    {
      date: "March 11, 2022",
      client: "Adrian Oliver",
    },
    {
      date: "March 12, 2022",
      client: "Skylar Wright",
    },
    {
      date: "March 13, 2022",
      client: "Menachem Haigh",
    },
    {
      date: "March 14, 2022",
      client: "Tyriq Novak",
    },
  ];
  return (
    <>
      {procedures.map((procedure, index) => {
        return (
          <div key={index} className="card">
            <div>{procedure.date}</div>
            <div>{procedure.client}</div>
          </div>
        );
      })}
    </>
  );
};

export default ProcedureView;
