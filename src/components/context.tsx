import { createContext } from 'react';

export const userIdContext = createContext({
  userId: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserId: () => {},
});
