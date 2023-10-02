import { Question } from "./Questions";
import { RequiredField } from "./RequiredField";

export interface PersonalInfo {
  firstName: RequiredField;
  lastName: RequiredField;
  emailId: RequiredField;
  phoneNumber: RequiredField;
  nationality: RequiredField;
  currentResidence: RequiredField;
  idNumber: RequiredField;
  dateOfBirth: RequiredField;
  gender: RequiredField;
  personalQuestions: Question[];
}
