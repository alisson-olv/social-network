'use client'
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface User {
  id: number;
  email: string;
  username: string;
  nome: string;
}

interface IUserContext {
  user: User | null;
  setUserLogged: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('UseContext deve estar dentro do provider.')
  }

  return context;
}

export default function UserContextProvider({ children, user }: { children: ReactNode, user: User | null }) {
  const [userLogged, setUserLogged] = useState<User | null>(user)

  return (
    <UserContext.Provider value={{ user: userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  )
}
