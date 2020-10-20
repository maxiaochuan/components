import React, { SFC, useMemo } from 'react';
import { merge } from 'lodash-es';
import { Provider } from './context';
import { DEFAULT_CORE_CONTEXT_CONFIG, CoreContextConfig } from './const';

export interface CoreProviderProps {
  defaultConfig?: Partial<CoreContextConfig>;
}

/**
 * @description
 * @author Maxiaochuan <mxcins@gmail.com>
 * @date 21-08-2020
 * @param {CoreProviderProps} props
 * @returns {*}
 */
const CoreProvider: SFC<CoreProviderProps> = props => {
  const { defaultConfig = {}, children } = props;
  const provided = useMemo(
    () => ({ config: merge(DEFAULT_CORE_CONTEXT_CONFIG, defaultConfig) }),
    [],
  );
  return <Provider value={provided}>{children}</Provider>;
};

CoreProvider.defaultProps = {
  defaultConfig: DEFAULT_CORE_CONTEXT_CONFIG,
};

export default CoreProvider;
