import { createContext, useEffect, useMemo, useState } from 'react';
import { IUser, TypeSetState } from '../../types';
import { getAuth, Auth } from 'firebase/auth';

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}
interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();
  useEffect(() => {}, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
    }),
    [user, ga]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
