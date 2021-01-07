import { createContext, useContext } from 'react';
import type { CoreContextConfigType, CoreContextRouterType } from './interface';
import { DEFAULT_CORE_CONTEXT } from './const';

export const CoreContext = createContext(DEFAULT_CORE_CONTEXT);

export const { Provider } = CoreContext;

export const useCoreConfig = (): CoreContextConfigType => {
  const ctx = useContext(CoreContext);
  return ctx.config;
};

export const useCoreRouter = (): CoreContextRouterType => {
  const ctx = useContext(CoreContext);
  return ctx.router;
};
