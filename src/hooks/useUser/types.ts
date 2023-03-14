import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserRegisterData {
  email: string;
  name: string;
  password: string;
}

export interface CustomTokenPayload extends JwtPayload {
  sub: string;
  email: string;
}
