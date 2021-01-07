import React, { SFC, useMemo } from 'react';
import { merge } from 'lodash-es';
import type { CoreProviderProps } from './interface';
import { Provider } from './context';
import { DEFAULT_CORE_CONTEXT_CONFIG } from './const';
import { RouterHelper } from './utils';

/**
 * @description
 * @author Maxiaochuan <mxcins@gmail.com>
 * @date 21-08-2020
 * @param {CoreProviderProps} props
 * @returns {*}
 */
const CoreProvider: SFC<CoreProviderProps> = props => {
  const { defaultConfig = {}, route, children } = props;
  const provided = useMemo(
    () => ({
      config: merge(DEFAULT_CORE_CONTEXT_CONFIG, defaultConfig),
      router: new RouterHelper(route),
    }),
    [],
  );
  return <Provider value={provided}>{children}</Provider>;
};

CoreProvider.defaultProps = {
  defaultConfig: DEFAULT_CORE_CONTEXT_CONFIG,
};

export default CoreProvider;
