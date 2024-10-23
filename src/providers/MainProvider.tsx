'use client';

import { Provider } from 'react-redux';
import store from '@/store/store';
import { FC, ReactNode } from 'react';

interface MainProviderProps {
  children: ReactNode;
}

const MainProvider: FC<MainProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default MainProvider;
