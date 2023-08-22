import {createContext} from 'react';

interface IAuthContext {}
export const AuthContext = createContext<IAuthContext>({});

interface IContextProvider {
  children: JSX.Element;
}

export const ContextProvider = ({children}: IContextProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
