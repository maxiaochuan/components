import type { CoreContextType } from './interface';
import { RouterHelper } from './utils';

export const DEFAULT_CORE_CONTEXT_SCROLLBARS_CONFIG = {
  forceCheckLazyload: false,
};

export const DEFAULT_CORE_CONTEXT_CONFIG = {
  scrollbars: DEFAULT_CORE_CONTEXT_SCROLLBARS_CONFIG,
};

export const DEFAULT_CORE_CONTEXT: CoreContextType = {
  config: DEFAULT_CORE_CONTEXT_CONFIG,
  router: new RouterHelper(),
};
