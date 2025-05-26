export interface IUser {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  avatar: string;
  role: string;
}