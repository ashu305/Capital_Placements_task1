import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import { Box, styled } from "@mui/material";
import PersonalInformation from "./PersonalInformation";
import { data } from "../interfaces/Data";
interface Props {
  data: data;
  setData(data: data): void;
}
const Form: React.FC<Props> = ({ data, setData }) => {
  const [personalInformation, setPersonalInformation] = useState(data.personalInformation);

  useEffect(() => {
    let tempData = { ...data };
    tempData.personalInformation = personalInformation;
    setData(tempData);
  }, [personalInformation]);

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
      <PersonalInformation information={personalInformation} setData={setPersonalInformation} />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});
