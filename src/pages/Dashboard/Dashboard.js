import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ClientView from "./Client/ClientView";
import ProcedureView from "./Procedure/ProcedureView";

import PlusIcon from "../../assets/images/PlusIcon.svg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("client");

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => setView("client")}>Clients</button>
        <button onClick={() => setView("procedures")}>Procedures</button>
      </div>
      <>{view === "client" ? <ClientView /> : <ProcedureView />}</>
      <img
        className="plus-icon"
        src={PlusIcon}
        onClick={() => navigate("/client/new")}
      />
    </div>
  );
};

export default Dashboard;
