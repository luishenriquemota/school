import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode
}


export interface IUserRequest{
 username: string;
 email: string;
 password: string; 
}

export interface ILogin{
  username: string;
  password: string;
}

export interface ICourseRequest{
  name: string;
  description: string
}

export interface ICourseResponse extends ICourseRequest{
  id: string;
  teacher: string;
  users: []
}