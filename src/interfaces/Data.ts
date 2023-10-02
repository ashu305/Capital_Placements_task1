import { PersonalInfo } from "./PersonalInfo";
import { Profile } from "./Profile";
import { Question } from "./Questions";

export interface data {
  coverImage: string;
  personalInformation: PersonalInfo;
  profile: Profile;
  customisedQuestions: Question[];
}
