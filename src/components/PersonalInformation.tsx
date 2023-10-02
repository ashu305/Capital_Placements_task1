import React from "react";
import { PersonalInfo } from "../interfaces/PersonalInfo";
import MyContainer from "./MyContainer";
import { Box, Typography, styled } from "@mui/material";
interface Props {
  data: PersonalInfo;
}
const PersonalInformation: React.FC<Props> = ({ data }) => {
  return (
    <MyContainer title="Personal Information">
      <InfoContainer>
        <Typography variant="h6">First Name</Typography>
      </InfoContainer>
    </MyContainer>
  );
};

export default PersonalInformation;

const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
