export interface IAuthContext {
  state: IAuthState;
  login(email: string, password: string): Promise<boolean>;
}

export interface IAuthState {
  isFetching: boolean;
  name: string;
  mothlySummary: {
    alfa: number;
    attendance: number;
    leave: number;
  };
}

export interface IContextProvider {
  children: JSX.Element;
}

export interface LoginResponse {
  email: string;
  token: string;
  userData: IAuthState;
}
