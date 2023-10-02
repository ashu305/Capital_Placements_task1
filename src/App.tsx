import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, CircularProgress, styled } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Form from "./components/Form";
import { data } from "./interfaces/Data";
import axios from "axios";

const App = () => {
  const [selectedHeader, setSelectedHeader] = useState(2);
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:4010/api/608.0828470536883/programs/placeat/application-form")
      .then((res) => {
        setData(res.data.data.attributes);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (data === null)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <h1>Something Went Wrong.. Reload the Page</h1>
      </Box>
    );
  return (
    <Wrapper>
      <Sidebar />
      <BodyContainer>
        <Header selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader} />
        <Form data={data} />
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
  overflow: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

const BodyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "2rem",
  gap: "1rem",
});

const FormSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "99%",
  height: "100%",
  backgroundColor: "#fff",
  marginTop: "0.4rem",
  marginLeft: "0.4rem",
  overflow: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
});
