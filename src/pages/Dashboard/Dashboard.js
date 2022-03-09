import React from "react";
import { useState, useEffect } from "react";
import ClientView from "./ClientView";
import ProcedureView from "./ProcedureView";

const Dashboard = () => {
  const [view, setView] = useState("client");

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => setView("client")}>Clients</button>
        <button onClick={() => setView("procedures")}>Procedures</button>
      </div>

      <>{view === "client" ? <ClientView /> : <ProcedureView />}</>
    </div>
  );
};

export default Dashboard;
