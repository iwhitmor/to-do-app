import { createContext, useContext, useMemo, useState } from 'react'
import jwt from 'jsonwebtoken';

const usersAPI = 'https://deltav-todo.azurewebsites.net/api/v1/Users';

export const AuthContext = createContext();

export default function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider");
  return auth;
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const auth = useMemo(() => {

    function hasPermission(permission) {
      if (!user) return false;
  
      if (!permission) return true;
  
      if (!user.permissions) return false;
  
      return user.permissions.includes(permission);
    }

    return ({

    user,

    hasPermission,
    login,
    logout,
  });
 }, [user]);

  async function login(loginData) {

    const result = await fetch(`${usersAPI}/Login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const resultBody = await result.json();
    console.log(resultBody)

    if (result.ok) {
      let user = processUser(resultBody)
      setUser(user);
    } else {
      console.warn('auth failed', resultBody);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  )
}

function processUser(user) {
  if (!user) return null;

  try {
    const payload = jwt.decode(user.token);
    if (payload) {
      Object.assign(user, payload);
      return user;
    }
  }
  catch (e) {
    console.warn(e);
  }

  return null;
}
