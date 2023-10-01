import { Box, styled } from "@mui/material";
import React from "react";
interface Props {
  selectedHeader: number;
  setSelectedHeader: (header: number) => void;
}
const Header: React.FC<Props> = ({ selectedHeader, setSelectedHeader }) => {
  const renderHeaderDetails = (boxValue: string, id: number) => {
    return (
      <>
        <ValueContainer
          sx={{
            backgroundColor: id === selectedHeader ? "#00635B" : "#fff",
            color: id === selectedHeader ? "#fff" : "#000",
            fontSize: "1.3rem",
          }}
          onClick={() => setSelectedHeader(id)}
        >
          {boxValue}
        </ValueContainer>

        <hr
          style={{
            backgroundColor: "#000000",
            height: "5rem",
            margin: "auto",
          }}
        />
      </>
    );
  };
  return (
    <Wrapper>
      {renderHeaderDetails("Program Details", 1)}
      {renderHeaderDetails("Application Form", 2)}
      {renderHeaderDetails("Workflow", 3)}
      {renderHeaderDetails("Preview", 4)}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  boxShadow: "0 0 1rem 0rem #9d9d9dc2",
});

const ValueContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "25%",
  height: "6rem",
  cursor: "pointer",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: "#00635B",
    color: "#fff",
  },
});
