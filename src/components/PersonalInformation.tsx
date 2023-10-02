import React, { useEffect, useState } from "react";
import { PersonalInfo } from "../interfaces/PersonalInfo";
import MyContainer from "./MyContainer";
import { Box, Checkbox, FormControlLabel, Switch, Typography, styled } from "@mui/material";
import { RequiredField } from "../interfaces/RequiredField";
import { Question } from "../interfaces/Questions";
import { data } from "../interfaces/Data";
interface Props {
  information: PersonalInfo;
  setData(value: PersonalInfo): void;
}
const PersonalInformation: React.FC<Props> = ({ information, setData }) => {
  const [currentData, setCurrentData] = useState<PersonalInfo>({ ...information });
  useEffect(() => {
    setData(currentData);
  }, [currentData]);

  const renderInfo = () => {
    let component: React.ReactNode[] = [];
    let i = 0;
    (Object.keys(currentData) as (keyof typeof currentData)[]).forEach((key, index) => {
      if (key !== "personalQuestions") {
        component.push(
          <>
            <InfoContainer key={i}>
              <Typography variant="h6">{key}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCurrentData((prevState) => {
                          prevState[key].internalUse = event.target.checked;
                          return {
                            ...prevState,
                          };
                        })
                      }
                      checked={currentData[key].internalUse}
                    />
                  }
                  checked={currentData[key].internalUse}
                  label="Internal"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={currentData[key].show}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCurrentData((prevState) => {
                          prevState[key].show = event.target.checked;
                          return {
                            ...prevState,
                          };
                        })
                      }
                    />
                  }
                  label="Show"
                />
              </Box>
            </InfoContainer>
            <hr />
          </>
        );
      }
    });
    return component;
  };
  return <MyContainer title="Personal Information">{renderInfo()}</MyContainer>;
};

export default PersonalInformation;

const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
