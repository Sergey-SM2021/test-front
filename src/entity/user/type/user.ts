type fields = "about";

export enum sex {
  man = "man",
  woman = "woman",
}

export interface IUser extends Record<fields, string> {
  Advantages: string[];
  CheckboxGroup: number[];
  RadioGroup: number;
  primaryInfo: {
    phone: string;
    mail: string;
  };
  personalData: {
    nickname: string;
    sex: {
      id: string;
      name: sex;
    };
    name: string;
    surename: string;
  };
}
