import { createContext, useContext } from 'react';
import type { CoreContextConfig } from './const';
import { DEFAULT_CORE_CONTEXT } from './const';

export const CoreContext = createContext(DEFAULT_CORE_CONTEXT);

export const { Provider } = CoreContext;

export const useCoreConfig = (): CoreContextConfig => {
  const ctx = useContext(CoreContext);
  return ctx.config;
};
