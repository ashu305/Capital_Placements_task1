import React from "react";
import MyContainer from "./MyContainer";
import { Box, styled } from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import { data } from "../interfaces/Data";
interface Props {
  data: data;
}
const Form: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <MyContainer title="Upload Cover Image">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </MyContainer>
      <PersonalInformation data={data.personalInformation} />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled(Box)({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  gap: "2rem",
});
