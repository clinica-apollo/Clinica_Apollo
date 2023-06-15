import useLocalStorage from "react-use-localstorage";

export function useUser() {
  const [rawUser, setRawUser] = useLocalStorage("user", null);

  const user = rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null;
  const setUser = (user) => setRawUser(JSON.stringify(user));

  return [user, setUser];
}
