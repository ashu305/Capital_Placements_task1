import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
interface Props {
  children: React.ReactNode;
  title: string;
}

const MyContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <HeaderContainer>{title}</HeaderContainer>
      {children}
    </Wrapper>
  );
};

export default MyContainer;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  backgroundColor: "#fff",
  width: "35rem",
  borderRadius: "0.7rem",
  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  padding: "1rem",
  marginLeft: "1rem",
});

const HeaderContainer = styled(Box)({
  backgroundColor: "#D0F7FA",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0.5rem",
  width: "103%",
  marginTop: "-1rem",
  marginLeft: "-1rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  borderRadius: "0.7rem 0.7rem 0 0",
});
