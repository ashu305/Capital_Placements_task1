import React, { useState } from "react";
import "./App.css";
import { Box, styled } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const App = () => {
  const [selectedHeader, setSelectedHeader] = useState(2);
  return (
    <Wrapper>
      <Sidebar />
      <BodyContainer>
        <Header selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader} />
      </BodyContainer>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#dddddd",
  flexDirection: "row",
});

const BodyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "2rem",
});
