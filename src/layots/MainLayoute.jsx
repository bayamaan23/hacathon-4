import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StartPage from "../components/start/StartPage";

function MainLayoute() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default MainLayoute;
