type fields = "about" | "nickname" | "name" | "surename";

export enum sex {
  man = "man",
  woman = "woman",
}

export interface IUser extends Record<fields, string> {
  Advantages: string[];
  CheckboxGroup: number[];
  sex: sex;
  RadioGroup: number;
  primaryInfo: {
    phone: string;
    mail: string;
  };
}
