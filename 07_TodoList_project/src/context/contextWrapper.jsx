import { UserContextProvider } from "./userContext";

export const contextProviderWrapper = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
