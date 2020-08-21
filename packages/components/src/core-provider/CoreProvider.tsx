/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { SFC, useMemo } from 'react';
import { Provider } from './context';

export interface CoreProviderProps {}

/**
 * @description
 * @author Maxiaochuan <mxcins@gmail.com>
 * @date 21-08-2020
 * @param {CoreProviderProps} props
 * @returns {*}
 */
const CoreProvider: SFC<CoreProviderProps> = props => {
  const { children } = props;
  const provided = useMemo(() => ({}), []);
  return <Provider value={provided}>{children}</Provider>;
};

export default CoreProvider;
