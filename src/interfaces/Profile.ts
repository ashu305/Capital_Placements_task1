import { Question } from "./Questions";
import { RequiredField } from "./RequiredField";

export interface Profile {
  education: RequiredField;
  experience: RequiredField;
  resume: RequiredField;
  profileQuestions: Question[];
}
