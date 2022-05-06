import { IHeader } from '@content/Header';
import { IOtherExperience } from '@content/Other-Experience';
import { ISkills } from '@content/Skills';
import { IWorkExperience } from '@content/Work-Experience';

export default interface IHome {
  header: IHeader;
  workExperience: IWorkExperience;
  skills: ISkills;
  otherExperience: IOtherExperience;
}
