export enum sex {
  man = "man",
  woman = "woman",
}

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
    advantages: string[];
    checkbox: number[];
    radio?: number;
  };
}
