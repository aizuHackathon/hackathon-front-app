import { createContext } from 'react';

export const userIdContext = createContext({
  userId: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserId: () => {},
});

export const userEvolutionContext = createContext({
  userIsEvoluted: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserIsEvoluted: () => {},
});
