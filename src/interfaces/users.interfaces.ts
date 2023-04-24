export interface IUserRequest {
  name: string;
  login: string;
  password: string;
}

export interface IUserUpdateRequest {
  name?: string;
  login?: string;
  password?: string;
}
