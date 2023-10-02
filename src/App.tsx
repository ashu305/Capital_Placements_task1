import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, CircularProgress, styled } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Form from "./components/Form";
import { data } from "./interfaces/Data";
import axios from "axios";

const App = () => {
  const [selectedHeader, setSelectedHeader] = useState(2);
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState(false);
  const [puttingRequest, setPuttingRequest] = useState(false);

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

  const handleSubmit = () => {
    setPuttingRequest(true);
    axios
      .put(`http://127.0.0.1:4010/api/60.66394262220031/programs/quia/application-form`, {
        data: {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "applicationForm",
          attributes: data,
        },
      })
      .then(() => {
        setPuttingRequest(false);
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
        setPuttingRequest(false);
      });
  };

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
        <Form data={data} setData={setData} />
        <Button
          variant="contained"
          sx={{
            margin: "auto",
            width: "10rem",
            height: "3rem",
            fontSize: "1.2rem",
          }}
          onClick={handleSubmit}
        >
          {puttingRequest === false ? "Submit" : <CircularProgress />}
        </Button>
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
  marginBottom: "2rem",
});
