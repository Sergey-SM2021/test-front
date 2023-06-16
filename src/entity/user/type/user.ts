export enum sex {
  man = "man",
  woman = "woman",
}

type Advantage = {
  value: string;
  id: string;
};

export interface IUser {
  about: string;
  primaryInfo: {
    phone: string;
    mail: string;
  };
  personalData: {
    nickname: string;
    sex: sex;
    name: string;
    surename: string;
  };
  secondaryData: {
    Advantages: Advantage[];
    CheckboxGroup: string[];
    Radio: string;
  };
}
