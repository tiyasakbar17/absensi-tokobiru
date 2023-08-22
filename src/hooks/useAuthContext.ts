import { useContext } from "react";
import { AuthContext } from "../context/Authentication";

export function useAuthContext() {
    return useContext(AuthContext);
  }