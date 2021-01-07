import { ReactNode } from 'react';
import type { RouterHelper } from './utils';

export interface CoreProviderProps {
  defaultConfig?: Partial<CoreContextConfigType>;
  route?: RouteType;
}

export type CoreContextRouterType = RouterHelper;

export interface CoreContextType {
  config: CoreContextConfigType;
  router: CoreContextRouterType;
}

export interface CoreContextConfigType {
  scrollbars: CoreContextScrollbarsConfigType;
}

export interface CoreContextScrollbarsConfigType {
  forceCheckLazyload: boolean;
}

export interface RouteType {
  name?: string;
  path?: string;
  component?: ReactNode;
  routes?: RouteType[];
}
