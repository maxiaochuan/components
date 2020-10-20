export interface CoreContextScrollbarsConfig {
  forceCheckLazyload: boolean;
}

export const DEFAULT_CORE_CONTEXT_SCROLLBARS_CONFIG = {
  forceCheckLazyload: false,
};

export interface CoreContextConfig {
  scrollbars: CoreContextScrollbarsConfig;
}
export const DEFAULT_CORE_CONTEXT_CONFIG: CoreContextConfig = {
  scrollbars: DEFAULT_CORE_CONTEXT_SCROLLBARS_CONFIG,
};

export interface CoreContext {
  config: CoreContextConfig;
}

export const DEFAULT_CORE_CONTEXT: CoreContext = {
  config: DEFAULT_CORE_CONTEXT_CONFIG,
};
