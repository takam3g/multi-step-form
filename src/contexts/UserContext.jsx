import { createContext, useState } from 'react';
import { PLAN_MODES, PLAN_TYPES } from '../constants/planConstants';


export const UserContext = createContext({
  user: {},
  setUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    {
      name: '',
      email: '',
      phone: '',
      plan: {
        mode: PLAN_MODES.MONTHLY,
        type: PLAN_TYPES.ARCADE.name,
      },
      addOns: {
        onlineService: false,
        largeStorage: false,
        customizableProfile: false
      }
    }
  );

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};