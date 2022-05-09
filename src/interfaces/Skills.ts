export interface ISkill {
  name: string;
  descriptions: string[];
}

export interface ISkills {
  title: string;
  list: ISkill[];
}
